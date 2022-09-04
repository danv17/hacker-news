import React from "react";
import { getNews } from "../api";
import { StyledContent, StyledNewsContainer } from "../style/Content";
import { NewProps, QueryType } from "../types";
import { getTimeAgo } from "../utils";
import { New } from "./New";
import { Dropdown } from "./Dropdown";
import { Toggle } from "./Toggle";
import angularIcon from "../assets/angular.png";
import reactIcon from "../assets/reactjs.png";
import vueIcon from "../assets/vuejs.png";

export const Content = (props: React.PropsWithChildren<{}>) => {
  const [news, setNews] = React.useState<NewProps[]>([]);
  const [framework, setFramework] = React.useState<QueryType>("");

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
  };

  const handleSelect = (value: string) => {
    setFramework(value as QueryType);
  }

  const mapNews = (news: any[]): NewProps[] => {
    const now = new Date().getTime();
    return news
      .filter((n) => n.created_at && n.author && n.story_title && n.story_url)
      .map((n) => {
        const milliseconds = now - new Date(n.created_at).getTime();
        const created_at = getTimeAgo(milliseconds);
        const { story_id, author, story_title, story_url } = n;
        return {
          story_id,
          created_at,
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
      <div style={{ display: "flex", justifyContent: "center"}}>
      <Dropdown
        label="Select your news"
        value={framework}
        options={[
          { label: "Angular", value: "angular", icon: angularIcon },
          { label: "Reactjs", value: "reactjs", icon: reactIcon },
          { label: "Vuejs", value: "vuejs", icon: vueIcon }
        ]}
        onSelect={handleSelect}
      />
      </div>
      <StyledNewsContainer>
        {news.map((hit, i) => (
          <New key={`${framework}${i}`} {...hit} />
        ))}
      </StyledNewsContainer>
    </StyledContent>
  );
};
