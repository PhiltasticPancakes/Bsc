
import { Client } from 'boardgame.io/react';
import { Pluralic } from './GameModes/Pluralic/Game'
import { PluralicBoard } from './GameModes/Pluralic/Board'

const App = Client({ game: Pluralic, board: PluralicBoard });

export default App;