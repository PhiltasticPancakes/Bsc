import React, { useState } from "react";
import { TileTemplates } from "./TileTemplates";
import { EditingBoard } from "./EditingBoard";
import { createMovementGrid, createTokenGrid } from "../Board";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";

export type EditorProps = { rowCount: number, colCount: number, gameName: string }

export const Editor = (props: EditorProps) => {
    const [tokens, setTokens] = useState(createTokenGrid(props.rowCount, props.colCount));
    const [movements, setMovements] = useState(createMovementGrid(props.rowCount, props.colCount))

    return (
        <>
        <h1>{props.gameName}</h1>
        <div style={{ display: 'flex' }}>
            <TileTemplates/>
            <EditingBoard tokens={tokens} movementPatterns={movements} />
        </div>
        </>
    )
}
