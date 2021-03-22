import { useState } from 'react';
import Scoreboard from '../Scoreboard/index';
import Board from '../Board/index';
import AskNewRound from '../AskNewRound/index';
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


            <Board screen={screen} players={players} handleWin={playerWinner => handleWin(playerWinner)} />
            {
                screen==="AskNewGame" ?
                <AskNewRound players={players} winner={lastWin} playNewRound={() => setScreen("Board")} />
                :
                null
            }
        </div>
    )
}

export default Game