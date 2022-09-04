import React from "react";
import {
  StyledDropdownContainer,
  StyledDropdownHeader,
  StyledDropdownItemList,
  StyledDropdownItem,
  StyledChevron,
} from "../style/Dropdown";
import { DropdownItemProps, DropdownProps } from "../types";

export const Dropdown = (props: React.PropsWithChildren<DropdownProps>) => {
  const { options, value, label, onSelect } = props;
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setOpen(false);
  };

  return (
    <StyledDropdownContainer>
      <StyledDropdownHeader onClick={handleClick}>
        {options.find((option) => option.value === value)?.label || label}
        <StyledChevron open={open} />
      </StyledDropdownHeader>
      <StyledDropdownItemList>
        {open &&
          options.map((option, i) => (
            <DropdownItem key={`${option.value}${i}`}
              {...option}
              onClick={() => handleSelect(option.value)}
            />
          ))}
      </StyledDropdownItemList>
    </StyledDropdownContainer>
  );
};

const DropdownItem = (
  props: DropdownItemProps & { onClick: (value: string) => void }
) => {
  const { value, label, icon, onClick } = props;

  return (
    <StyledDropdownItem onClick={() => onClick(value)}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </StyledDropdownItem>
  );
};
