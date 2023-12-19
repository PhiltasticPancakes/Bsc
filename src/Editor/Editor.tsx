import React, { useState } from "react";
import { TileTemplates } from "./TileTemplates";
import { EditingBoard } from "./EditingBoard";
import { GridPosition, createMovementGrid, createTokenGrid } from "../Board";
import { TokenTemplates } from "./TokenTemplates";
import { MovementDescription, playerID } from "../PlayingBoard/BoardMovement";
import { EditorTileProps } from "../Tiles.tsx/Tile";
import { Button } from "@mui/material";
import { Game } from "boardgame.io";
import { GameDefinition, PlayingBoardState } from "../PlayingBoard/PlayingBoard";

export type EditorProps = { rowCount: number, colCount: number, gameName: string }

const localStorageSaveGame = (gameName: string, game: GameDefinition) => {
    localStorage.setItem('game_' + gameName, JSON.stringify(game));
}

//Set method to save games
let saveGame: (gameName: string, game: GameDefinition) => void;
saveGame = localStorageSaveGame;

export const Editor = (props: EditorProps) => {
    const [tokens, setTokens] = useState(createTokenGrid(props.rowCount, props.colCount));
    const [tiles, setTiles] = useState(createMovementGrid(props.rowCount, props.colCount))
    const [selectedTokenTemplate, setSelectedTokenTemplate] = useState<playerID | null>(null);

    const onTokenTemplateClicked = (playerID: playerID) => {
        console.log(playerID);
        setSelectedTokenTemplate(playerID);
    }

    const onDragDropped = (gridPos: GridPosition, movementDescription: MovementDescription) => {
        const newTiles = tiles.slice();
        newTiles[gridPos.row][gridPos.col] = movementDescription;
        setTiles(newTiles);
    }

    const onBoardTileClicked = (gridpos: GridPosition): void => {
        if (tokens[gridpos.row][gridpos.col]) {
            const newGrid = tokens.slice();
            newGrid[gridpos.row][gridpos.col] = null;
            setTokens(newGrid);
        }
        else if (selectedTokenTemplate) {
            const newGrid = tokens.slice();
            newGrid[gridpos.row][gridpos.col] = selectedTokenTemplate;
            setTokens(newGrid);
        }
    }

    const onSaveClicked = () => {
        const newGame: GameDefinition = {
            gameName: props.gameName,
            initialBoard: {
                tokens: tokens,
                tiles: tiles
            },
            playerCount: 2,
            moveCount: 1,

        }

        saveGame(props.gameName, newGame);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <h1>{props.gameName}</h1>
                <h1> Selected token: {selectedTokenTemplate}</h1>
                <Button onClick={() => onSaveClicked()}> Save </Button>
            </div>
            <div className="editor">
                <TileTemplates />
                <EditingBoard tokens={tokens} tiles={tiles} clickHandler={onBoardTileClicked} onDragDropped={onDragDropped} />
                <TokenTemplates clickHandler={onTokenTemplateClicked} />
            </div>
        </>
    )
}
