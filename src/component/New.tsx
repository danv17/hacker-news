import React from "react";
import { AppContext } from "../context/AppContext";
import {
  StyledNewContainer,
  StyledLinkContainer,
  StyledTimeAgoByAuthor,
  StyledStoryTitle,
  StyledFavorite,
  TimeIcon,
  HeartIcon,
  HeartFullIcon,
} from "../style/New";
import { NewProps } from "../types";

export const New = (props: NewProps) => {
  const { framework, objectID, timeAgo, author, story_title, story_url, favourite } = props;
  const { news, setNews } = React.useContext(AppContext);
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const idx = news.findIndex((n) => n.framework === framework && n.objectID === objectID);
    let favNew = news[idx];
    favNew.favourite = !favNew.favourite;
    let updatedNews = [...news];
    updatedNews[idx] = favNew;
    setNews(updatedNews);
  }

  return (
    <StyledNewContainer>
      <StyledLinkContainer href={story_url} target="_black">
        <div id={`${framework}${objectID}${author}`}>
          <StyledTimeAgoByAuthor>
            <TimeIcon />
            {`${timeAgo} ago by ${author}`}
          </StyledTimeAgoByAuthor>
          <StyledStoryTitle>{story_title}</StyledStoryTitle>
        </div>
      </StyledLinkContainer>
      <StyledFavorite>
        <div onClick={handleClick}>
          {favourite ? <HeartFullIcon /> : <HeartIcon />}
        </div>
      </StyledFavorite>
    </StyledNewContainer>
  );
};
