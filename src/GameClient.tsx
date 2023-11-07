
import { Client } from 'boardgame.io/react';
import { Pluralic } from './GameModes/Pluralic/Game'
import { PlayingBoardComponent } from './PlayingBoard/PlayingBoard';
import { Container } from '@mui/material';
import React from 'react';

const GameClient = Client({ game: Pluralic, board: PlayingBoardComponent });

export const ClientComponent = () => {
    return (
        <Container>
            <GameClient/>
        </Container>
    )
}
