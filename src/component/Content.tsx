import React from "react";
import { getNews } from "../api";
import { StyledContent } from "../style/Content";
import {
  FrameworkNewsType,
  NewProps,
  QueryType,
  StrictQueryType,
} from "../types";
import { getItem, getTimeAgo, saveItem } from "../utils";
import { Dropdown } from "./Dropdown";
import { Toggle } from "./Toggle";
import angularIcon from "../assets/angular.png";
import reactIcon from "../assets/reactjs.png";
import vueIcon from "../assets/vuejs.png";
import { NewsContainer } from "./NewsContainer";
import { StyledNEwsWrapper } from "../style/NewsContainer";

export const Content = (props: React.PropsWithChildren<{}>) => {
  const [news, setNews] = React.useState<NewProps[]>([]);
  const [framework, setFramework] = React.useState<QueryType>("");
  const [lastFramework, setLastFramework] = React.useState<QueryType>("");
  const [loadMore, setLoadMore] = React.useState<boolean>(false);
  const newsContainerRef = React.useRef<HTMLDivElement>(null);

  const loadNews = React.useCallback(
    (query: StrictQueryType, page: number, currentNews: NewProps[]) => {
      getNews(query, page).then((response) => {
        const { hits, page, nbPages } = response.data;
        const filteredNews = mapNews(hits, query);
        currentNews = [...currentNews, ...filteredNews];
        setNews(currentNews);
        saveItem<FrameworkNewsType>(query, {
          page,
          maxPage: nbPages,
          news: currentNews,
        });
      });
    },
    []
  );

  React.useEffect(() => {
    if (framework) {
      const currentFrameworkNews = getItem<FrameworkNewsType>(framework);
      let page = currentFrameworkNews?.page || 0;
      let currentNews = currentFrameworkNews?.news || [];
      if (currentFrameworkNews) {
        if (loadMore) {
          page =
            page < currentFrameworkNews.maxPage
              ? page
              : currentFrameworkNews.maxPage;
          loadNews(framework, page + 1, currentNews);
          setLoadMore(false);
        } else {
          setNews(currentFrameworkNews.news);
        }
      } else {
        loadNews(framework, page, currentNews);
      }
    }
  }, [framework, loadMore, loadNews]);

  const handleSelect = (value: string) => {
    if (!lastFramework) {
      setLastFramework(value as StrictQueryType);
    }

    if (framework !== value) {
      newsContainerRef.current?.scrollTo({ top: 0 });
      setLastFramework(framework);
      setFramework(value as StrictQueryType);
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (
      newsContainerRef.current &&
      newsContainerRef.current.clientHeight ===
        newsContainerRef.current.scrollHeight && e.deltaY > 0
    ) {
      setLoadMore(true);
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    const bottom =
      element.scrollHeight - element.scrollTop === element.clientHeight;
    if (bottom) {
      setLoadMore(bottom);
    }
  };

  const mapNews = (news: any[], framework: StrictQueryType): NewProps[] => {
    const now = new Date().getTime();
    return news
      .filter((n) => n.created_at && n.author && n.story_title && n.story_url)
      .map((n) => {
        const milliseconds = now - new Date(n.created_at).getTime();
        const timeAgo = getTimeAgo(milliseconds);
        const { objectID, created_at, author, story_title, story_url } = n;
        return {
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

  return (
    <StyledContent>
      <Toggle options={["All", "My faves"]} />
      <Dropdown
        label="Select your news"
        value={framework}
        options={[
          { label: "Angular", value: "angular", icon: angularIcon },
          { label: "Reactjs", value: "reactjs", icon: reactIcon },
          { label: "Vuejs", value: "vuejs", icon: vueIcon },
        ]}
        onSelect={handleSelect}
      />
      <StyledNEwsWrapper ref={newsContainerRef} onScroll={handleScroll} onWheel={handleWheel}>
        <NewsContainer news={news} />
      </StyledNEwsWrapper>
    </StyledContent>
  );
};
