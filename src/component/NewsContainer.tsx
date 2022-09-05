import React from "react";
import { AppContext } from "../context/AppContext";
import { StyledNewsContainer } from "../style/NewsContainer";
import { NewsContainerProps } from "../types";
import { New } from "./New";

export const NewsContainer = (
  props: React.PropsWithChildren<NewsContainerProps>
) => {
  const { news } = React.useContext(AppContext);

  return (
    <StyledNewsContainer>
      {news.map((hit, i) => (
        <New key={`${hit.objectID}${i}`} {...hit} />
      ))}
    </StyledNewsContainer>
  );
};
