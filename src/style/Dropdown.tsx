import styled, { css } from "styled-components";
import { ChevronProps } from "../types";

export const StyledDropdownContainer = styled.div`
  width: 15rem;
  height: 2rem;
  background-color: #fff;
  margin-bottom: 2.375rem;

  & div {
    width: 100%;
    height: 100%;
  }
`;

export const StyledDropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75rem;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #343434;
`;

export const StyledDropdownItemList = styled.ul`
  box-shadow: 0 2px 2px 0 #dad8d8;
  background-color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 15rem;
`;

export const StyledDropdownItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.938rem 0.625rem;

  & img {
    margin-right: 0.813rem;
  }
`;

const StyledChevronOpen = css`
  top: 0.15rem;
  transform: rotate(-45deg);
`;

export const StyledChevron = styled.span<ChevronProps>`
  border-style: solid;
  border-width: 0.1em 0.1em 0 0;
  content: "";
  display: inline-flex;
  height: 0.45em;
  transform: rotate(135deg);
  position: relative;
  vertical-align: middle;
  width: 0.45em;

  ${({ open }) => open && StyledChevronOpen}
`;
