import styled from "styled-components";
import { ReactComponent as TimeSvg } from "../assets/time.svg";
import { ReactComponent as HeartSvg } from "../assets/heart.svg";
import { ReactComponent as HeartFullSvg } from "../assets/heart-full.svg";

export const StyledNewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: solid 1px rgb(151 151 151 / 80%);
  opacity: 1;
  transition: opacity 0.15s ease-in-out;

  &:hover {
      opacity: 0.5;
      transition: opacity 0.15s ease-in-out;
  }
`

export const StyledLinkContainer = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.625rem;
  background-color: #fff;
  text-decoration: none;
  padding-left: 2rem;
`;

export const StyledTimeAgoByAuthor = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`;

export const StyledStoryTitle = styled.div`
  display: block;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`;

export const TimeIcon = styled(TimeSvg)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;

export const StyledFavorite = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1.375rem;
  background-color: rgb(96 96 96 / 6%);

  & svg {
    cursor: pointer;
  }
`;

export const HeartIcon = styled(HeartSvg)`
  width: 1.5rem;
  height: 1.375rem;
`;

export const HeartFullIcon = styled(HeartFullSvg)`
  width: 1.5rem;
  height: 1.375rem;
`;
