import { Button, Container, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { ClientComponent } from "./GameClient";
import { GameDefinition, PlayingBoardState } from "./PlayingBoard/PlayingBoard";
import { green } from "@mui/material/colors";

type GameListItemProps = {
    game: GameDefinition;
}

const getGameList = (): GameDefinition[] => {
    const gameList: GameDefinition[] = [];
    for (const gameName in localStorage) {
        if (gameName.startsWith("game_")) {
            gameList.push(JSON.parse(localStorage[gameName]));
        }
    }
    return gameList;
}

export const PlayPage = () => {
    const [game, selectGame] = useState<GameDefinition | null>(null);

    const GameListItem = (props: GameListItemProps) => {
        return (
            <button onClick={() => selectGame(props.game)}>
                {props.game.gameName}
            </button>
        )
    }

    const GameModePicker = () => {
        const gameList: GameDefinition[] = getGameList();


        const gameNames: string[] = gameList.map((g) => g.gameName);
        return (

            <div style={{ display: "flex", flexDirection: "column" }}>
                {gameList.map((g) => <GameListItem key={g.gameName} game={g} />

                )}
            </div>

        )

    }

    const content = game ?
        <ClientComponent {...game} />
        :
        <GameModePicker />

    return (
        <div className="play-page">
            {content}
        </div>   )

}