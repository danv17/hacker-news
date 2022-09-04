import styled, { css } from "styled-components";
import { ToggleButtonProps } from "../types";

export const StyledToggleGroup = styled.div`
    padding: 3.375rem 0; 
`

const selectedToggleButton = css`
    border: solid 1px #1797ff;
    color: #1797ff;
`

export const StyledToggleButton = styled.button<ToggleButtonProps>`
    border: solid 1px #d6d6d6;
    background-color: #fcfcfc;
    width: 6.125rem;
    height: 1.938rem;

    &:first-child {
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
    }

    &:last-child {
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
    }

    ${({ selected }) => selected && selectedToggleButton}
`
