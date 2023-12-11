import React, { useState } from "react";
import { TileTemplates } from "./TileTemplates";
import { EditingBoard } from "./EditingBoard";
import { GridPosition, createMovementGrid, createTokenGrid } from "../Board";

export type EditorProps = { rowCount: number, colCount: number, gameName: string }

export const Editor = (props: EditorProps) => {
    const [tokens, setTokens] = useState(createTokenGrid(props.rowCount, props.colCount));
    const [movements, setMovements] = useState(createMovementGrid(props.rowCount, props.colCount))
    const [selectedTokenTemplate, setSelectedTokenTemplate] = useState(null);

    const clickHandler = () => {

    }

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
