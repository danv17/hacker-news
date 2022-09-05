import styled from "styled-components";
import { horizontalPaddingSmall } from "./CssVariables";

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 9.375rem;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  max-height: 10%;

  @media (max-width: 768px) {
    padding: 0 ${horizontalPaddingSmall}rem;
  }
`;

export const StyledHeader = styled.h1`
  text-transform: uppercase;
`;
