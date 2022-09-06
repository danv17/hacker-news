import React from "react";
import { getNews } from "../api";
import { AppContext } from "../context/AppContext";
import { StyledNewsContainer } from "../style/NewsContainer";
import { CurrentPageType, NewProps, StrictQueryType } from "../types";
import { getItem, getTimeAgo, saveItem } from "../utils";
import { New } from "./New";
import { v4 as uuidv4 } from 'uuid';

export const NewsContainer = () => {
  const {
    news,
    setNews,
    showFavs,
    selectedFramework,
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
        console.log(framework)
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
      setNews([...news, ...filteredNews]);
      saveItem<CurrentPageType>(query, {
        page,
        maxPages: nbPages,
      });
      setIsLoading(false);
    },
    [isLoading, loadMore, news, setIsLoading, setLoadMore, setNews]
  );

  React.useEffect(() => {
    if (selectedFramework) {
      const storedPage = getItem<CurrentPageType>(selectedFramework) || undefined;
      if (!storedPage) {
        loadNews(selectedFramework, 0);
        return;
      }
      let page = storedPage.page;
      if (news.filter((n) => n.framework === selectedFramework) && storedPage) {
        if (!showFavs && loadMore && page < storedPage.maxPages) {
          loadNews(selectedFramework, page + 1);
        }
        if (!news.length) {
          setNews(news);
        }
      } else {
        loadNews(selectedFramework, page);
      }
    }
  }, [loadMore, loadNews, news, selectedFramework, setNews, showFavs]);

  return (
    <StyledNewsContainer data-testid="news-container-test-id">
      {news
        .filter((hit) =>
          showFavs ? hit.favourite === true : hit.framework === selectedFramework
        )
        .map((hit) => (
          <New key={uuidv4()} {...hit} />
        ))}
    </StyledNewsContainer>
  );
};
