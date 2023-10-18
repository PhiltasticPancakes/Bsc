import React, { useState } from "react";
import { GridPosition } from "./Board";
import { TileG } from "./Board";

type TileProps = { gridPos: GridPosition, tile: TileG, onClick: (gridPos: GridPosition) => void, isSelected: boolean}

export const Tile = (props: TileProps) => {
    return (
        <>
            <button style={props.isSelected? {color: 'Green'} : {}}
                onClick={() => { props.onClick(props.gridPos)}}
            >
                {props.tile.tokenG?.playerID}
            </button>
        </>
    )
}