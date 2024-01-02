import React, { useState } from "react";
import { TileTemplates } from "./TileTemplates";
import { EditingBoard } from "./EditingBoard";
import { TokenTemplates } from "./TokenTemplates";
import { Button } from "@mui/material";
import { Token, Tile, GridPosition, GameDefinition, WinCondition, Board, SaveImplementation } from "../../../Framework/types";
import { createTokenGrid, createTileGrid } from "../../../Framework/Utilities";
import { useNavigate } from "react-router-dom";

export type EditorProps = { rowCount: number, colCount: number, gameName: string, saveGame: SaveImplementation }

export type Template = (TokenTemplate | TileTemplate);

export type TokenTemplate = {
    type: "token",
    token: Token
}

export type TileTemplate = {
    type: "tile",
    tile: Tile
}

type ZoneControlType = WinCondition & {zone: GridPosition[]};

const ZoneControl: ZoneControlType = {
    description: "Zone Control",
    check: (gameState) => {
        return false;
    },
    zone: []
}


export const Editor = (props: EditorProps) => {
    const [tokens, setTokens] = useState(createTokenGrid(props.rowCount, props.colCount));
    const [tiles, setTiles] = useState(createTileGrid(props.rowCount, props.colCount))
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
    const [winCondition, setWinCondition] = useState<WinCondition>( ZoneControl );

    const navigate = useNavigate();

    const onTemplateClicked = (template: Template) => {
        setSelectedTemplate(template);
    }

    const onBoardTileClicked = (gridpos: GridPosition): void => {
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
            winCondition: winCondition,
        }

        props.saveGame(props.gameName, newGame);
        navigate("/");
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" , border: "2px solid black"}}>
                <h1>GameMode: {props.gameName}</h1>

                <Button style={{position: 'absolute', left: '50%', right: '50%'}} variant="outlined" onClick={() =>{ return null}}> Select contested zone </Button>

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
