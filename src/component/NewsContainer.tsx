import React, { RefObject } from "react";
import { StyledNewsContainer } from "../style/NewsContainer";
import { NewsContainerProps } from "../types";
import { New } from "./New";

export const NewsContainer = (
  props: React.PropsWithChildren<NewsContainerProps>
) => {
  const { news } = props;

  return (
    <StyledNewsContainer>
      {news.map((hit, i) => (
        <New key={`${hit.objectID}${i}`} {...hit} />
      ))}
    </StyledNewsContainer>
  );
};
