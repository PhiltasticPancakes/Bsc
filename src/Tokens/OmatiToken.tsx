import React from "react";
import { useDrag } from "react-dnd";
import { playerID } from "../PlayingBoard/BoardMovement";

export const OmatiToken = (props: {playerID: playerID}) => {
    return (
            <span className="dot">{Number(props.playerID) + 1}</span>
    )
}