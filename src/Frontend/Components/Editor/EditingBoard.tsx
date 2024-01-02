import React, { useState } from "react";
import { BoardComponent, EditingBoardProps} from "../Board";

export const EditingBoard = (props: EditingBoardProps) => {
    return (

            <BoardComponent
                {...props}
                 />
    )
}