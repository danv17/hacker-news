import React from "react";
import { getNews } from "../api";
import { StyledContent, StyledNewsContainer } from "../style/Content";
import { NewProps } from "../types";
import { getTimeAgo } from "../utils";
import { New } from "./New";
import { Toggle } from "./Toggle";

export const Content = (props: React.PropsWithChildren<{}>) => {
  const [news, setNews] = React.useState<NewProps[]>([]);

  React.useEffect(() => {
    getNews("angular", 0).then((response) => {
      const filteredNews = mapNews(response.data.hits);
      setNews(filteredNews);
    });
  }, []);

  const mapNews = (news: any[]): NewProps[] => {
    const now = new Date().getTime();
    return news
      .filter((n) => n.created_at && n.author && n.story_title && n.story_url)
      .map((n) => {
        const milliseconds = now - new Date(n.created_at).getTime();
        const created_at = getTimeAgo(milliseconds);
        const { author, story_title, story_url } = n;
        return { created_at, author, story_title, story_url };
      });
  };

  return (
    <StyledContent>
      <Toggle options={["All", "My faves"]} />
      <StyledNewsContainer>
        {news.map((hit, i) => (
          <New key={i} {...hit} />
        ))}
      </StyledNewsContainer>
    </StyledContent>
  );
};
