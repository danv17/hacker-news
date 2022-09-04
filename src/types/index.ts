import React from "react";

export type HeaderProps = {
    title: string;
}

export type ToggleProps = {
    options: string[];
}

export type ToggleButtonProps = {
    selected: boolean;
}

export type NewProps = {
    story_id: number;
    created_at: string;
    author: string;
    story_title: string;
    story_url: string;
    favourite: boolean;
}

export type DropdownProps = {
    options: DropdownItemProps[];
    value: string;
    label: string;
    onSelect: (value: string) => void;
}

export type DropdownItemProps = {
    value: string;
    label: string;
    icon: string;
}

export type ChevronProps = {
    open: boolean;
}

export type QueryType = "" | "angular" | "reactjs" | "vuejs";