import styled from "styled-components";
import {
  contentHorizontalPaddingMedium,
  contentHorizontalPaddingSmall,
} from "./CssVariables";

export const StyledContent = styled.div`
  padding: 0 9.375rem;

  @media (max-width: 1200px) {
    padding: 0 ${contentHorizontalPaddingMedium}rem;
  }

  @media (max-width: 900px) {
    padding: 0 ${contentHorizontalPaddingSmall}rem;
  }
`;
