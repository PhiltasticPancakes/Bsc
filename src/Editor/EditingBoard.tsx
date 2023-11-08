import React, { useState } from "react";
import { BoardComponent, createTokenGrid } from "../Board";
import { Board } from "../PlayingBoard/PlayingBoard";
import { useDrop } from "react-dnd";
import { TemplateTileProps } from "../Tile";

export type EditingBoardProps = Board &
    {

    };

export const EditingBoard = (props: EditingBoardProps) => {
    const [, drop] = useDrop({
        accept: 'Template',
        drop: (item: TemplateTileProps) => {
            
        },
    });

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