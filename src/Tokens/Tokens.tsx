import React from "react";
import { OmatiToken } from "./OmatiToken";
import { Template } from "../Components/Editor/Editor";
import { playerID } from "../Framework/types";

export type TokenProps = {
    playerID: playerID;
}

export type TemplateTokenProps = {
    clickHandler: (template: Template) => void;
    playerID: playerID;
}

export const TemplateTokenComponent = (props: TemplateTokenProps) => {
    return (
        <div onClick={() => props.clickHandler({ type: "token", token: props.playerID })}>
            <OmatiToken playerID={props.playerID} />
        </div>
    )
}

export const TokenComponent = (props: TokenProps) => {
    return (
        <OmatiToken playerID={props.playerID} />
    )
}