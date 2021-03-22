import Scoreboard from '../Scoreboard/index';
import Board from '../Board/index';
import AskNewRound from '../AskNewRound/index';
import { useEffect, useState } from 'react';
import { Players } from '../../consts';
import './style.css';

const defaultScore = {
        [Players.playerOne]: 0,
        [Players.playerTwo]: 0
}

const Game = ({ players }) => {
    const [screen, setScreen] = useState("Board");

    const [score, setScore] = useState(defaultScore);
    
    const [lastWin, setLastWin] = useState();

    const handleWin = (playerWinner) => {
        setScore(prevScore => {
            let newScore = { ...prevScore };
            newScore[playerWinner]++;
            return newScore;
        })
        setLastWin(playerWinner);
        setScreen("AskNewGame");
    }

    return (
        <div class="game">
            <Scoreboard players={players} score={score} resetScore={() => setScore(defaultScore)}/>
            {screen === "Board" ?
                <Board players={players} handleWin={playerWinner => handleWin(playerWinner)} />
                :
                <AskNewRound players={players} winner={lastWin} playNewRound={() => setScreen("Board")}/>
            }
        </div>
    )
}

export default Game