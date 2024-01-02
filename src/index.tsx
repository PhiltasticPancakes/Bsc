import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.css";
import { EditorPage } from "./Frontend/Pages/EditorPage";
import { PlayPage } from "./Frontend/Pages/PlayPage";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HomePage } from "./Frontend/Pages/HomePage";
import { GameDefinition } from "./Framework/types";

const localStorageSaveGame = (gameName: string, game: GameDefinition) => {
  localStorage.setItem("game_" + gameName, JSON.stringify(game));
};

const getGameList = (): GameDefinition[] => {
  const gameList: GameDefinition[] = [];
  for (const gameName in localStorage) {
    if (gameName.startsWith("game_")) {
      gameList.push(JSON.parse(localStorage[gameName]));
    }
  }
  return gameList;
};

const root = document.getElementById("root");
render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <div className="page-wrapper">
          <header>
            <Button size="large" component={Link} to={"/"} variant="outlined">
              {" "}
              <Typography>Home</Typography>{" "}
            </Button>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/play"
                element={<PlayPage getGameList={getGameList} />}
              />
              <Route
                path="/edit"
                element={<EditorPage saveGame={localStorageSaveGame} />}
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </DndProvider>
  </StrictMode>,
  root,
);
