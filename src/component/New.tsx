import React from "react";
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

export const New = (props: React.PropsWithChildren<NewProps>) => {
  const { timeAgo, author, story_title, story_url, favourite } = props;
  const [ fav, setFav ] = React.useState<boolean>(favourite);
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setFav(!fav);
  }

  return (
    <StyledNewContainer>
      <StyledLinkContainer href={story_url} target="_black">
        <div>
          <StyledTimeAgoByAuthor>
            <TimeIcon />
            {`${timeAgo} ago by ${author}`}
          </StyledTimeAgoByAuthor>
          <StyledStoryTitle>{story_title}</StyledStoryTitle>
        </div>
      </StyledLinkContainer>
      <StyledFavorite>
        <div onClick={handleClick}>
          {fav ? <HeartFullIcon /> : <HeartIcon />}
        </div>
      </StyledFavorite>
    </StyledNewContainer>
  );
};
