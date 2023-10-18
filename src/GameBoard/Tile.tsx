import React, { useState } from "react";
import { GridPosition, Token, onTileClicked } from "./Board";
import { TileG } from "./Board";

type TileProps = { gridPos: GridPosition, tile: TileG }

export const Tile = (props: TileProps) => {
    const [token, setToken] = useState(props.tile.tokenG);
    return (
        <button
            onClick={() => { onTileClicked(props.gridPos); }}
        >
        {token?.playerID}
        </button>
    )
}