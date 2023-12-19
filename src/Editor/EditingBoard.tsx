import React, { useState } from "react";
import { BoardComponent, GridPosition} from "../Board";
import { Board } from "../PlayingBoard/PlayingBoard";
import { MoveDescription } from "../PlayingBoard/BoardMovement";

export type EditingBoardProps = Board &
    {
        clickHandler: any;
        onDragDropped: any;
    };

export const EditingBoard = (props: EditingBoardProps) => {
    return (

            <BoardComponent
                handleClick= {props.clickHandler}
                editing={true}
                tokens={props.tokens}
                tiles={props.tiles}
                selectedTile={null}
                highlightedTiles={[]}
                onDragDropped={props.onDragDropped}
                 />
    )
}