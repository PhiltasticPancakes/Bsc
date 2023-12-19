import React from "react";
import { playerID } from "../PlayingBoard/BoardMovement"

export type TokenProps = {
    type: string;
    clickHandler?: any
    playerID: playerID;
}