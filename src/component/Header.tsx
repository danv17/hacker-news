import React from "react";
import { StyledHeaderContainer, StyledHeader } from "../style/Header";
import { HeaderProps } from "../types";

export const Header = (props: React.PropsWithChildren<HeaderProps>) => {
  const { title } = props;

  return (
    <StyledHeaderContainer>
      <StyledHeader>{title}</StyledHeader>
    </StyledHeaderContainer>
  );
};
