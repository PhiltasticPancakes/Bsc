import React from "react";
import { playerID } from "../PlayingBoard/BoardMovement"
import { GridPosition } from "../Board";
import { OmatiToken } from "./OmatiToken";
import { Template, TokenTemplate } from "../Editor/Editor";

export type TokenProps = {
    playerID: playerID;
}

export type TemplateTokenProps = {
    clickHandler: (template: Template) => void;
    playerID: playerID;
}

export const TemplateTokenComponent = (props: TemplateTokenProps) => {
    return (
        <div onClick={() => props.clickHandler({type: "token", token: props.playerID})}>
            <OmatiToken playerID={props.playerID} />
        </div>
    )
}

export const TokenComponent = (props: TokenProps) => {
    return (
            <OmatiToken playerID={props.playerID} />
    )
}