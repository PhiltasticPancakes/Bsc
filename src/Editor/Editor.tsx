import React, { useState } from "react";
import { TileTemplates } from "./TileTemplates";
import Grid from "./Grid";
import Template from "./Template";
import { MovementDescription } from "../GameBoard/MovementsPatterns";

export const Editor = () => {
    const squares = [
        { id: 'square1', pattern: "horse" },
        { id: 'square2', pattern: "castle" },
        // Add more squares as needed
    ];

    return (
        <>
            <h1>This is the editor</h1>
            <div style={{ display: 'flex' }}>
                <TileTemplates />
                <div className="sidebar">
                    {squares.map((square) => (
                        <Template key={square.id} id={square.id} pattern={MovementDescription.Horse}/>
                    ))}
                </div>

                <Grid squares={squares.map((square) => <Template key={square.id} id={square.id} pattern={MovementDescription.Horse} />)} />
                
            </div>
        </>
    );
}
