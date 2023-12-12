import React from "react";
import { TokenProps } from "./Tokens";
import { useDrag } from "react-dnd";

export const OmniToken = (props: TokenProps) => {
    return (
        props.type == 'template' ?
            <div onClick={() => props.clickHandler(props.playerID)}>
                <span className="dot">{props.playerID}</span>
            </div>
            :

            <span className="dot">{props.playerID}</span>
    )
}