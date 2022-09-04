import React from "react";
import { StyledToggleGroup, StyledToggleButton } from "../style/Toggle";
import { ToggleProps } from "../types";

export const Toggle = (props: React.PropsWithChildren<ToggleProps>) => {
  const { options } = props;
  const [ optionSelected, setOptionSelected ] = React.useState<string>(options[0]);

  const handleClick = (option: string) => {
      setOptionSelected(option);
  }

  return (
    <StyledToggleGroup>
      {options.map((option, i) => (
        <StyledToggleButton onClick={() => handleClick(option)} selected={optionSelected === option} key={i}>
          {option}
        </StyledToggleButton>
      ))}
    </StyledToggleGroup>
  );
};
