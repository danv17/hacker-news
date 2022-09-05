import React from "react";
import { StyledToggleGroup, StyledToggleButton } from "../style/Toggle";
import { ToggleButtonProps, ToggleProps } from "../types";

export const Toggle = (props: React.PropsWithChildren<ToggleProps>) => {
  const { options } = props;
  const [ optionSelected, setOptionSelected ] = React.useState<string>(options[0].label);

  const handleClick = (option: ToggleButtonProps) => {
      setOptionSelected(option.label);
      option.onClick();
  }

  return (
    <StyledToggleGroup>
      {options.map((option, i) => (
        <StyledToggleButton onClick={() => handleClick(option)} selected={optionSelected === option.label} key={i}>
          {option.label}
        </StyledToggleButton>
      ))}
    </StyledToggleGroup>
  );
};
