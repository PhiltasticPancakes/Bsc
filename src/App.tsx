
import { Client } from 'boardgame.io/react';
import { Pluralic } from './GameModes/Pluralic/Game.js'
import { PluralicBoard } from './GameModes/Pluralic/Board.js'

const App = Client({ game: Pluralic, board: PluralicBoard });

export default App;