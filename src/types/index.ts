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

export type QueryType = "" | "angular" | "reactjs" | "vuejs";