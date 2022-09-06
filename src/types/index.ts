export type HeaderProps = {
  title: string;
};

export type ToggleProps = {
  options: ToggleButtonProps[];
};

export type ToggleButtonProps = {
  label: string;
  onClick: () => void;
}

export type NewProps = {
  framework: StrictQueryType;
  objectID: string;
  created_at: string;
  timeAgo: string;
  author: string;
  story_title: string;
  story_url: string;
  favourite: boolean;
};

export type DropdownProps = {
  options: DropdownItemProps[];
  value: string;
  label: string;
  onSelect: (value: string) => void;
};

export type DropdownItemProps = {
  value: string;
  label: string;
  icon: string;
};

export type DropdownItemActionProps = {
  onClick: (value: string) => void;
};

export type StrictQueryType = "angular" | "reactjs" | "vuejs";

export type QueryType = StrictQueryType | "";

export type FrameworkNewsType = {
  page: number;
  maxPage: number;
  news: NewProps[];
};

export type CurrentPageType = {
  page: number;
  maxPages: number;
}

export type FrameworkPageType = {
  framework: StrictQueryType;
  page: number;
  maxPage: number;
  news: NewProps[];
};

export type StyledToggleButtonProps = {
  selected: boolean;
};

export type StyledDropdownItemProps = {
  selected: boolean;
};

export type StyledChevronProps = {
  open: boolean;
};

export type StyledDropdownWrapperType = {
  showFavs: boolean;
}
