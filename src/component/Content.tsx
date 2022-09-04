import React from "react";
import { getNews } from "../api";
import { StyledContent, StyledNewsContainer } from "../style/Content";
import { NewProps, QueryType } from "../types";
import { getTimeAgo } from "../utils";
import { New } from "./New";
import { Toggle } from "./Toggle";

export const Content = (props: React.PropsWithChildren<{}>) => {
  const [ news, setNews ] = React.useState<NewProps[]>([]);
  const [ framework, setFramework ] = React.useState<QueryType>("");

  React.useEffect(() => {
    if (framework) {
      getNews(framework, 0).then((response) => {
        const filteredNews = mapNews(response.data.hits);
        setNews(filteredNews);
        // localStorage.setItem(framework, filteredNews.toString());
      });
    }
  }, [framework]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFramework(e.target.value as QueryType);
  }

  const mapNews = (news: any[]): NewProps[] => {
    const now = new Date().getTime();
    return news
      .filter((n) => n.created_at && n.author && n.story_title && n.story_url)
      .map((n) => {
        const milliseconds = now - new Date(n.created_at).getTime();
        const created_at = getTimeAgo(milliseconds);
        const { story_id, author, story_title, story_url } = n;
        return { story_id, created_at, author, story_title, story_url, favourite: false };
      });
  };

  return (
    <StyledContent>
      <Toggle options={["All", "My faves"]} />
      <select value={framework} onChange={handleChange}>
        <option value="" disabled>Select your news</option>
        <option key="angular0" value="angular">
          Angular
        </option>
        <option key="reactjs1" value="reactjs">
          Reactjs
        </option>
        <option key="vuejs2" value="vuejs">
          Vuejs
        </option>
      </select>
      <StyledNewsContainer>
        {news.map((hit, i) => (
          <New key={`${framework}${i}`} {...hit} />
        ))}
      </StyledNewsContainer>
    </StyledContent>
  );
};
