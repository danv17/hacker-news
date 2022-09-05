import styled from "styled-components";

export const StyledNewsWrapper = styled.div`
  height: 50vh;
  overflow-y: scroll;
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
