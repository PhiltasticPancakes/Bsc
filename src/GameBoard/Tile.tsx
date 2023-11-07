import React, { useState } from "react";
import { GridPosition } from "./PlayingBoard";
import { Token } from "./PlayingBoard";

type TileProps = { gridPos: GridPosition, token: Token | null, onClick: (gridPos: GridPosition) => void, highlight: boolean}

export const Tile = (props: TileProps) => {
    return (
        <>
            <button style={props.highlight? {color: 'Green'} : {}}
                onClick={() => { props.onClick(props.gridPos)}}
            >
                {props.token}
            </button>
        </>
    )
}