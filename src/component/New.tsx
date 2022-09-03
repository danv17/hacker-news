import React from "react";
import { StyledNewContainer } from "../style/New";
import { NewProps } from "../types";

export const New = (props: React.PropsWithChildren<NewProps>) => {
    const { created_at, author, story_title, story_url } = props;

    return (
        <StyledNewContainer>
            <span>{created_at}</span>
            <span>{author}</span>
            <span>{story_title}</span>
            <a href={story_url} target="_black">Click</a>
        </StyledNewContainer>
    );
}
