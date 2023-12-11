import React, { useState } from "react";
import { BoardComponent, GridPosition} from "../Board";
import { Board } from "../PlayingBoard/PlayingBoard";
import { MoveDescription } from "../PlayingBoard/MovementsPatterns";

export type EditingBoardProps = Board &
    {
    };

export const EditingBoard = (props: EditingBoardProps) => {
    return (
        <>
            <BoardComponent
                
                editing={true}
                tokens={props.tokens}
                movementPatterns={props.movementPatterns}
                selectedTile={null}
                highlightedTiles={[]} />
        </>
    )
}