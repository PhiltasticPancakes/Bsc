import React, { useState } from "react";
import { TileTemplates } from "./TileTemplates";
import { EditingBoard } from "./EditingBoard";
import { GridPosition, createMovementGrid, createTokenGrid } from "../Board";
import { TokenTemplates } from "./TokenTemplates";
import { MovementDescription, playerID } from "../PlayingBoard/MovementsPatterns";
import { EditorTileProps } from "../Tiles.tsx/Tile";

export type EditorProps = { rowCount: number, colCount: number, gameName: string }

export const Editor = (props: EditorProps) => {
    const [tokens, setTokens] = useState(createTokenGrid(props.rowCount, props.colCount));
    const [tiles, setTiles] = useState(createMovementGrid(props.rowCount, props.colCount))
    const [selectedTokenTemplate, setSelectedTokenTemplate] = useState<playerID | null>(null);

    const onTokenTemplateClicked = (playerID:playerID) => {
        console.log(playerID);
        setSelectedTokenTemplate(playerID);
    }

    const onDragDropped = (gridPos: GridPosition, movementDescription: MovementDescription) => {
        const newTiles = tiles.slice();
        newTiles[gridPos.row][gridPos.col] = movementDescription;
        setTiles(newTiles);
    }

    const onBoardTileClicked = (gridpos: GridPosition): void => {
        if(tokens[gridpos.row][gridpos.col]) {
            const newGrid = tokens.slice();
            newGrid[gridpos.row][gridpos.col] = null;
            setTokens(newGrid);
        }
        else if(selectedTokenTemplate) {
            const newGrid = tokens.slice();
            newGrid[gridpos.row][gridpos.col] = selectedTokenTemplate;
            setTokens(newGrid);
        }
    }

    return (
        <>
        <h1>{props.gameName} selected token {selectedTokenTemplate}</h1>
        <div className="editor">
            <TileTemplates/>
            <EditingBoard tokens={tokens} tiles={tiles} clickHandler={onBoardTileClicked} onDragDropped={onDragDropped}/>
            <TokenTemplates clickHandler = {onTokenTemplateClicked}/>
        </div>
        </>
    )
}
