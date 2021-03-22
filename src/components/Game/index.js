import Scoreboard from '../Scoreboard/index';
import Board from '../Board/index';
import { useState } from 'react';
import {Players} from '../../consts';

const Game = ({players}) => {
    const [score, setScore] = useState({
        [Players.playerOne]: 0,
        [Players.playerTwo]: 0
    });

    return (
        <div>
            <Scoreboard players={players} score={score}/>
            <Board players={players}/>
            {/*ask new game*/}
        </div>
    )
}

export default Game