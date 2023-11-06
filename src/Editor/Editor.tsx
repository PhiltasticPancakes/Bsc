import React, { useState } from "react";
import { TileTemplates } from "./TileTemplates";
import Grid from "./Grid";
import Template from "./Template";
import { castleMovement, horseMovement } from "../GameBoard/MovementsPatterns";

export const Editor = () => {
    const squares = [
        { id: 'square1', pattern: horseMovement },
        { id: 'square2', pattern: castleMovement },
        // Add more squares as needed
    ];

    return (
        <>
            <h1>This is the editor</h1>
            <div style={{ display: 'flex' }}>
                <TileTemplates />
                <div className="sidebar">
                    {squares.map((square) => (
                        <Template key={square.id} id={square.id} pattern={square.pattern}/>
                    ))}
                </div>
                <Grid squares={squares.map((square) => <Template key={square.id} id={square.id} pattern={square.pattern} />)} />
                
            </div>
        </>
    );
    return <>
        <h1>This is the editor</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <TileTemplates />
            <Grid squares={[{ id: 1, color: 'green' }]} />
        </div>
    </>
}
