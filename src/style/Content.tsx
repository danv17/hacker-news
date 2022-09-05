import styled from "styled-components";
import { contentHorizontalPaddingSmall } from "./CssVariables";

export const StyledContent = styled.div`
  padding: 0 9.375rem;

  @media (max-width: 768px) {
    padding: 0 ${contentHorizontalPaddingSmall}rem;;
  }
`;
