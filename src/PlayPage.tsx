import { Button, Container, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { ClientComponent } from "./GameClient";
import { setup } from "./GameModes/Pluralic/Setup";
import { PlayingBoard } from "./PlayingBoard/PlayingBoard";

type GameListItemProps = {
    gameName: string
}



export const PlayPage = () => {
    const [game, selectGame] = useState<PlayingBoard | null>(null);

    const GameListItem = (props: GameListItemProps) => {
        return (
            <button style={{minHeight: "40px"}} onClick={() => selectGame(JSON.parse( localStorage[props.gameName]))}>
                {props.gameName}
            </button>
        )
    }

    const GameModePicker = () => {
        const gameList: string[] = ['pluralic'];

        for(const g in localStorage) {
            if(g.startsWith("game_")) {
                gameList.push(g);
            }

        }

        return (

            <div style={{display:"flex", flexDirection:"column"}}>
                {gameList.map( (g) => <GameListItem key={g} gameName={g}/>
                
                )}
            </div>
        
        )
        
    }

    return (
        game ?
            <ClientComponent {...game} />
            :
            <GameModePicker />
    )

}