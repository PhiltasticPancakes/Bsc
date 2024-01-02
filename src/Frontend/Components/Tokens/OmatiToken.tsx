import { PlayerID } from "boardgame.io";
import React from "react";

export const OmatiToken = (props: {playerID: PlayerID}) => {
    return (
            <span className="dot">{Number(props.playerID) + 1}</span>
    )
}