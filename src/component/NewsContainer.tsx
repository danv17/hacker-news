import React from "react";
import { getNews } from "../api";
import { AppContext } from "../context/AppContext";
import { StyledNewsContainer } from "../style/NewsContainer";
import { CurrentPageType, NewProps, StrictQueryType } from "../types";
import { getItem, getTimeAgo, saveItem } from "../utils";
import { New } from "./New";

export const NewsContainer = () => {
  const {
    news,
    setNews,
    showFavs,
    framework,
    loadMore,
    setLoadMore,
    isLoading,
    setIsLoading,
  } = React.useContext(AppContext);

  const mapNews = (news: any[], framework: StrictQueryType): NewProps[] => {
    const now = new Date().getTime();
    return news
      .filter((n) => n.created_at && n.author && n.story_title && n.story_url)
      .map((n) => {
        const milliseconds = now - new Date(n.created_at).getTime();
        const timeAgo = getTimeAgo(milliseconds);
        const { objectID, created_at, author, story_title, story_url } = n;
        return {
          framework,
          objectID,
          created_at,
          timeAgo,
          author,
          story_title,
          story_url,
          favourite: false,
        };
      });
  };

  const loadNews = React.useCallback(
    async (query: StrictQueryType, page: number) => {
      if (isLoading) return;
      if (loadMore) setLoadMore(false);
      setIsLoading(true);
      const response = await getNews(query, page);
      const { hits, nbPages } = response.data;
      const filteredNews = mapNews(hits, query);
      const storedNews = getItem<NewProps[]>("news") || [];
      setNews([...storedNews, ...filteredNews]);
      saveItem<CurrentPageType>(query, {
        page,
        maxPages: nbPages,
      });
      setIsLoading(false);
    },
    [loadMore, setIsLoading, setLoadMore, setNews]
  );

  React.useEffect(() => {
    if (framework) {
      const storedNews = getItem<NewProps[]>("news") || [];
      const storedPage = getItem<CurrentPageType>(framework) || undefined;
      if (!storedPage) {
        loadNews(framework, 0);
        return;
      }
      let page = storedPage.page;
      if (storedNews.filter((n) => n.framework === framework) && storedPage) {
        if (!showFavs && loadMore && page < storedPage.maxPages) {
          loadNews(framework, page + 1);
        }
        if (!news.length) {
          setNews(storedNews);
        }
      } else {
        loadNews(framework, page);
      }
    }
  }, [
    framework,
    loadMore,
    loadNews,
    news.length,
    setLoadMore,
    setNews,
    showFavs,
  ]);

  return (
    <StyledNewsContainer>
      {news
        .filter((hit) =>
          showFavs ? hit.favourite === true : hit.framework === framework
        )
        .map((hit) => (
          <New key={`${hit.framework}${hit.objectID}${hit.author}`} {...hit} />
        ))}
    </StyledNewsContainer>
  );
};
