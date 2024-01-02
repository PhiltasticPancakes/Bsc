import React, { useState } from "react";
import { TileTemplates } from "./TileTemplates";
import { EditingBoard } from "./EditingBoard";
import { TokenTemplates } from "./TokenTemplates";
import { Button } from "@mui/material";
import { GameDefinition } from "../PlayingBoard/PlayingBoard";
import { Token, Tile, GridPosition } from "../../../Framework/types";
import { createTokenGrid, createTileGrid } from "../../../Framework/Utilities";

export type EditorProps = { rowCount: number, colCount: number, gameName: string }

export type Template = (TokenTemplate | TileTemplate);

export type TokenTemplate = {
    type: "token",
    token: Token
}

export type TileTemplate = {
    type: "tile",
    tile: Tile
}

const localStorageSaveGame = (gameName: string, game: GameDefinition) => {
    localStorage.setItem('game_' + gameName, JSON.stringify(game));
}

//Set method to save games
let saveGame: (gameName: string, game: GameDefinition) => void;
saveGame = localStorageSaveGame;

export const Editor = (props: EditorProps) => {
    const [tokens, setTokens] = useState(createTokenGrid(props.rowCount, props.colCount));
    const [tiles, setTiles] = useState(createTileGrid(props.rowCount, props.colCount))
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

    const onTemplateClicked = (template: Template) => {
        console.log("Clicked on template: " + template);
        setSelectedTemplate(template);
    }

    const onBoardTileClicked = (gridpos: GridPosition): void => {
        console.log("Clicked on board tile: " + gridpos.row + "," + gridpos.col);
        console.log("Selected template: " + selectedTemplate);
        if (selectedTemplate == null) {
            return;
        }

        if (selectedTemplate.type == "token") {
            const newTokens = tokens.slice();
            newTokens[gridpos.row][gridpos.col] = selectedTemplate.token;
            setTokens(newTokens);
        } else {
            const newTiles = tiles.slice();
            newTiles[gridpos.row][gridpos.col] = selectedTemplate.tile;
            setTiles(newTiles);
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
            <div style={{ display: "flex", justifyContent: "space-between" , border: "2px solid black"}}>
                <h1>GameMode: {props.gameName}</h1>
                <Button variant="outlined" onClick={() => onSaveClicked()}> Save </Button>
            </div>
            <div className="editor">
                <TileTemplates clickHandler={onTemplateClicked} selectedTemplate={selectedTemplate}/>
                <EditingBoard tokens={tokens} tiles={tiles} clickHandler={onBoardTileClicked} editing={true}/>
                <TokenTemplates clickHandler={onTemplateClicked} selectedTemplate={selectedTemplate}/>
            </div>
        </>
    )
}
