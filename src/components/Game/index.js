import Scoreboard from '../Scoreboard/index';
import Board from '../Board/index';
import AskNewRound from '../AskNewRound/index';
import { useState } from 'react';
import { Players } from '../../consts';
import './style.css';

const initialState = {
    score: {
        [Players.playerOne]: 0,
        [Players.playerTwo]: 0
    }
}

const Game = ({ players }) => {
    const [screen, setScreen] = useState("Board");

    const [score, setScore] = useState(initialState.score);

    const [lastWin, setLastWin] = useState();

    const handleWin = (playerWinner) => {
        if (playerWinner !== Players.noPlayer) setScore(prevScore => {
            let newScore = { ...prevScore };
            newScore[playerWinner]++;
            return newScore;
        })
        
        setLastWin(playerWinner);
        setScreen("AskNewGame");
    }

    return (
        <div className="game">
            <Scoreboard players={players} score={score} resetScore={() => setScore(initialState.score)} />

            {screen === "Board" ?
                <Board players={players} handleWin={playerWinner => handleWin(playerWinner)} />
                :
                <AskNewRound players={players} winner={lastWin} playNewRound={() => setScreen("Board")} />
            }
        </div>
    )
}

export default Game