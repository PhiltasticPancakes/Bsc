import React, { useState } from "react";
import { BaseBoardProps, BoardComponent} from "../Board";

export type EditingBoardProps = BaseBoardProps & {
    editing: true,
}

export const EditingBoard = (props: EditingBoardProps) => {
    return (

            <BoardComponent
                {...props}
                 />
    )
}