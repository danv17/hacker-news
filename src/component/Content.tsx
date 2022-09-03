import React from "react";
import { getNews } from "../api";
import { StyledContent, StyledNewsContainer } from "../style/Content";
import { NewProps } from "../types";
import { New } from "./New";

export const Content = (props: React.PropsWithChildren<{}>) => {
  const [news, setNews] = React.useState<NewProps[]>([]);

  React.useEffect(() => {
    getNews("angular", 0).then((response) => {
      const filteredNews = mapNews(response.data.hits);
      setNews(filteredNews);
    });
  }, []);

  const mapNews = (news: any[]): NewProps[] => {
    return news.filter(
      (n) => n.created_at && n.author && n.story_title && n.story_url
    );
  };

  return (
    <StyledContent>
      <StyledNewsContainer>
        {news.map((hit) => (
          <New {...hit} />
        ))}
      </StyledNewsContainer>
    </StyledContent>
  );
};
