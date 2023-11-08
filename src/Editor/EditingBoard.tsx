import React, { useState } from "react";
import { BoardComponent, createTokenGrid } from "../Board";
import { Board } from "../PlayingBoard/PlayingBoard";
import { useDrop } from "react-dnd";
import { TemplateProps } from "./TileTemplates";

export type EditingBoardProps = Board &
    {

    };

export const EditingBoard = (props: EditingBoardProps) => {
    const [, drop] = useDrop({
        accept: 'Template',
        drop: (item: TemplateProps) => {
            // Handle the drop event here
            console.log(`Dropped square ${item.id}`);
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