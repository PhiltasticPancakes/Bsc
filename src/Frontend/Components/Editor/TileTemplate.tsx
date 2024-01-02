import React from "react";
import { TileType } from "../../../Framework/types";
import { TileTemplate } from "./Editor";
import { BaseTileProps } from "../BaseTile";

export type TemplateTileProps = {
    tileType: TileType,
    clickHandler: (tile: TileTemplate) => void
} & BaseTileProps;

export const TemplateTileComponent = (props: TemplateTileProps) => {
    let style: React.CSSProperties = {
        ...(props.isSelected ? { color: 'Green' } : {}),
        background: props.tileType.color,
    }

    return (
        <div className="tile" style={style}
            onClick={() => {
                    props.clickHandler({ templateType: "tile", tileType: props.tileType});

            }}
        >
            {props.tileType.name}
        </div>
    )
}