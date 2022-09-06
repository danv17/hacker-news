import styled from "styled-components";
import { StyledNewsContainerWrapperType } from "../types";

export const StyledNewsWrapper = styled.div<StyledNewsContainerWrapperType>`
  height: 50vh;
  overflow-y: auto;

  @media (max-width: 900px) {
    height: ${({ showFavs }) => showFavs ? 69 : 60}vh;
  }
`;

export const StyledNewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledNewsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1f 3f 1f;
`;
