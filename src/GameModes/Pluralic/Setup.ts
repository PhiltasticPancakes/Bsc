import { MovementDescription } from "../../PlayingBoard/BoardMovement";

export const setup = {
    tokens:
        [
            ["2", "2", "2", "2", "2", "2", "2", "2"],
            ["2", "2", "2", "2", "2", "2", "2", "2"],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            ["1", "1", "1", "1", "1", "1", "1", "1"],
            ["1", "1", "1", "1", "1", "1", "1", "1"]
        ],

    movementPatterns:
        [
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ],
            [MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight, MovementDescription.Knight,MovementDescription.Knight ]
            
        ],
    possibleMoves:
        []

}