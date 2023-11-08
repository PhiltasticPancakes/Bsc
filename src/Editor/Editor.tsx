import React, { useState } from "react";
import { TileTemplates } from "./TileTemplates";
import { EditingBoard } from "./EditingBoard";
import { createMovementGrid, createTokenGrid } from "../Board";

export type EditorProps = { rowCount: number, colCount: number, gameName: string }

export const Editor = (props: EditorProps) => {
    const [tokens, setTokens] = useState(createTokenGrid(props.rowCount, props.colCount));
    const [movements, setMovements] = useState(createMovementGrid(props.rowCount, props.colCount))

    return (
        <>
        <h1>{props.gameName}</h1>
        <div className="editor">
            <TileTemplates/>
            <EditingBoard tokens={tokens} movementPatterns={movements} />
        </div>
        </>
    )
}
