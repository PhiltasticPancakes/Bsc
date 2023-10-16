import { hot } from "react-hot-loader";
import React from "react";
import { Client } from 'boardgame.io/react';
import { Pluralic } from './GameModes/Pluralic/Game.js';

import { PluralicBoard } from './GameModes/Pluralic/Board.js';
const App = Client({ game: Pluralic, board: PluralicBoard });
export default hot(module)(App);
