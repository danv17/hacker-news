import styled from "styled-components";
import { contentHorizontalPaddingSmall } from "./CssVariables";

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 9.375rem;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  max-height: 10%;

  @media (max-width: 900px) {
    padding: 0 ${contentHorizontalPaddingSmall}rem;
  }
`;

export const StyledHeader = styled.h1`
  font-family: 'Baskerville';
  text-transform: uppercase;
`;
