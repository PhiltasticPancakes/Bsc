import { Grid } from "@mui/material";
import React from "react";



type BoardComponentProps = {
    width: number;
    height: number;

}


const TileComponent = (isSelected: boolean) => {
    return (
        <div className="tile" style={isSelected? {color: 'Green'} : {}}>
        </div>
    )
}

const BoardComponent = ({width, height, }: BoardComponentProps) => {
    const gridLayout = {gridTemplateColumns: "repeat(" + width + ", 1fr)"}

    return (
        <div className="tile-grid" style={gridLayout}>
        </div>
    )
}