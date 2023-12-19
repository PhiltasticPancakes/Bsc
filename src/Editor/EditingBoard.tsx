import React, { useState } from "react";
import { BoardComponent, EditingBoardProps, GridPosition} from "../Board";
import { Board } from "../PlayingBoard/PlayingBoard";
import { MoveDescription } from "../PlayingBoard/BoardMovement";

export const EditingBoard = (props: EditingBoardProps) => {
    return (

            <BoardComponent
                {...props}
                 />
    )
}