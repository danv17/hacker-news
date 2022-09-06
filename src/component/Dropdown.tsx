import React from "react";
import { AppContext } from "../context/AppContext";
import {
  StyledDropdownContainer,
  StyledDropdownHeader,
  StyledDropdownItemList,
  StyledDropdownItem,
  StyledChevron,
  StyledDropdownWrapper,
} from "../style/Dropdown";
import {
  DropdownItemActionProps,
  DropdownItemProps,
  DropdownProps,
  StyledDropdownItemProps,
} from "../types";

export const Dropdown = (props: React.PropsWithChildren<DropdownProps>) => {
  const { options, value, label, onSelect } = props;
  const [open, setOpen] = React.useState<boolean>(false);
  const { showFavs } = React.useContext(AppContext);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);
  };

  const handleSelect = (value: string) => {
    onSelect(value);
    setOpen(false);
  };

  return (
    <StyledDropdownWrapper showFavs={showFavs} data-testid="dropdown-test-id">
      <StyledDropdownContainer>
        <StyledDropdownHeader role="button" onClick={handleClick} data-testid="dropdown-header-test-id">
          {label}
          <StyledChevron open={open} data-testid={open ? "chevron-open-test-id" : "chevron-close-test-id"} />
        </StyledDropdownHeader>
        <StyledDropdownItemList data-testid="dropdown-item-list-test-id">
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
    </StyledDropdownWrapper>
  );
};

const DropdownItem = (
  props: DropdownItemProps & DropdownItemActionProps & StyledDropdownItemProps
) => {
  const { value, label, icon, onClick, selected } = props;

  return (
    <StyledDropdownItem onClick={() => onClick(value)} selected={selected}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </StyledDropdownItem>
  );
};
