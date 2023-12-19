import React from "react";
import { TokenProps } from "./Tokens";
import { useDrag } from "react-dnd";

export const OmniToken = (props: TokenProps) => {
    return (
        props.type == 'template' ?
            <div onClick={() => props.clickHandler(props.playerID)}>
                <span className="dot">{Number(props.playerID) + 1}</span>
            </div>
            :

            <span className="dot">{Number(props.playerID) + 1}</span>
    )
}