import React, { useState } from "react";
import { TileTemplates } from "./TileTemplateMenu";
import { EditingBoard } from "./EditingBoard";
import { TokenTemplates } from "./TokenTemplates";
import { Button } from "@mui/material";
import {
  Token,
  Tile,
  GridPosition,
  GameDefinition,
  WinCondition,
  Board,
  SaveImplementation,
  TileType,
} from "../../../Framework/types";
import { createTokenGrid, createTileGrid } from "../../../Framework/Utilities";
import { useNavigate } from "react-router-dom";

export type EditorProps = {
  rowCount: number;
  colCount: number;
  gameName: string;
  saveGame: SaveImplementation;
};

export type Template = TokenTemplate | TileTemplate;

export type TokenTemplate = {
  templateType: "token";
  token: Token;
};

export type TileTemplate = {
  templateType: "tile";
  tileType: TileType;
};

type ZoneControlType = WinCondition & { zone: GridPosition[] };

const ZoneControl: ZoneControlType = {
  description: "Zone Control",
  check: (gameState) => {
    return false;
  },
  zone: [],
};

export const Editor = (props: EditorProps) => {
  const [tokens, setTokens] = useState(
    createTokenGrid(props.rowCount, props.colCount),
  );
  const [tiles, setTiles] = useState(
    createTileGrid(props.rowCount, props.colCount),
  );
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null,
  );
  const [winCondition, setWinCondition] = useState<ZoneControlType>(ZoneControl);

  const [settingWinCondition, setSettingWinCondition] = useState(false);

  const navigate = useNavigate();

  const onTemplateClicked = (template: Template) => {
    setSelectedTemplate(template);
  };

  const onBoardTileClicked = (gridpos: GridPosition): void => {
    if (settingWinCondition) {
      const newZone = winCondition.zone.slice();

      // Remove if already in zone
      if(winCondition.zone.some((pos) => pos.row == gridpos.row && pos.col == gridpos.col)){
        const index = winCondition.zone.findIndex((pos) => pos.row == gridpos.row && pos.col == gridpos.col);
        newZone.splice(index, 1);
        setWinCondition({ ...winCondition, zone: newZone });
        return;
      }

      // Add if not in zone
      newZone.push(gridpos);
      setWinCondition({ ...winCondition, zone: newZone });
      return;
    }


    if (selectedTemplate == null) {
      return;
    }

    if (selectedTemplate.templateType == "token") {
      const newTokens = tokens.slice();
      newTokens[gridpos.row][gridpos.col] = selectedTemplate.token;
      setTokens(newTokens);
    } else {
      const newTiles = tiles.slice();
      newTiles[gridpos.row][gridpos.col].tileTypeName =
        selectedTemplate.tileType.name;
      setTiles(newTiles);
    }
  };

  const onSaveClicked = () => {
    const newGame: GameDefinition = {
      gameName: props.gameName,
      initialBoard: {
        tokens: tokens,
        tiles: tiles,
      },
      winZone: winCondition.zone,
      playerCount: 2,
      moveCount: 1,
      winCondition: winCondition,
    };

    props.saveGame(props.gameName, newGame);
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "2px solid black",
        }}
      >
        <h1>GameMode: {props.gameName}</h1>

        <Button
          style={settingWinCondition? {backgroundColor: 'green'} : { }}
          variant="outlined"
          onClick={() => {
            setSettingWinCondition(!settingWinCondition);
          }}
        >
          {" "}
          Select contested zone{" "}
        </Button>

        <Button variant="outlined" onClick={() => onSaveClicked()}>
          {" "}
          Save{" "}
        </Button>
      </div>
      <div className="editor">
        <TileTemplates
          clickHandler={onTemplateClicked}
          selectedTemplate={selectedTemplate}
        />
        <EditingBoard
                  tokens={tokens}
                  tiles={tiles}
                  clickHandler={onBoardTileClicked}
                  editing={true} 
                  winZone={winCondition.zone}        />
        <TokenTemplates
          clickHandler={onTemplateClicked}
          selectedTemplate={selectedTemplate}
        />
      </div>
    </>
  );
};
