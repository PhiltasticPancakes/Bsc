import React, { useState } from "react";
import { GridPosition } from "./PlayingBoard";
import { Token } from "./PlayingBoard";

type TileProps = { gridPos: GridPosition, tile: Token, onClick: (gridPos: GridPosition) => void, highlight: boolean}

export const Tile = (props: TileProps) => {
    return (
        <>
            <button style={props.highlight? {color: 'Green'} : {}}
                onClick={() => { props.onClick(props.gridPos)}}
            >
                {props.tile}
            </button>
        </>
    )
}