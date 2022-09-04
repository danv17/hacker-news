import React from "react";
import {
  StyledNewContainer,
  StyledTimeAgoByAuthor,
  StyledStoryTitle,
  StyledFavorite,
  TimeIcon,
  HeartIcon,
} from "../style/New";
import { NewProps } from "../types";

export const New = (props: React.PropsWithChildren<NewProps>) => {
  const { created_at, author, story_title, story_url } = props;

  return (
    <div>
      <StyledNewContainer href={story_url} target="_black">
        <div>
          <StyledTimeAgoByAuthor>
            <TimeIcon />
            {`${created_at} ago by ${author}`}
          </StyledTimeAgoByAuthor>
          <StyledStoryTitle>{story_title}</StyledStoryTitle>
        </div>
        <StyledFavorite>
          <HeartIcon />
        </StyledFavorite>
      </StyledNewContainer>
    </div>
  );
};
