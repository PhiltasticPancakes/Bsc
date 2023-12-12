import { playerID } from "../PlayingBoard/MovementsPatterns"

export type TokenProps = {
    type: string;
    clickHandler?: any
    playerID: playerID;
}