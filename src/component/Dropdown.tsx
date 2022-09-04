import React from "react";
import {
  StyledDropdownContainer,
  StyledDropdownHeader,
  StyledDropdownItemList,
  StyledDropdownItem,
  StyledChevron,
} from "../style/Dropdown";
import { DropdownItemActionProps, DropdownItemProps, DropdownProps, StyledDropdownItemProps } from "../types";

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
        {label}
        <StyledChevron open={open} />
      </StyledDropdownHeader>
      <StyledDropdownItemList>
        {open &&
          options.map((option, i) => (
            <DropdownItem
              key={`${option.value}${i}`}
              {...option}
              onClick={() => handleSelect(option.value)}
              selected={option.value === value}
            />
          ))}
      </StyledDropdownItemList>
    </StyledDropdownContainer>
  );
};

const DropdownItem = (
  props: DropdownItemProps &  DropdownItemActionProps & StyledDropdownItemProps
) => {
  const { value, label, icon, onClick, selected } = props;

  return (
    <StyledDropdownItem onClick={() => onClick(value)} selected={selected}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </StyledDropdownItem>
  );
};
