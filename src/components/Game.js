import Scoreboard from './Scoreboard';
import Board from './Board';
import { useState } from 'react';

const Game = ({players}) => {
    const [score, setScore] = useState();
    return (
        <div>
            <Scoreboard />
            <Board />
            {/*ask new game*/}
        </div>
    )
}

export default Game