import { Players } from '../../consts';
import './style.css';

const Scoreboard = ({ players, score, resetScore }) => {
    return (
        <section className="scoreboard">
            <h3>Score:</h3>
            <div className="scoreboard-player">
                <div className={"circle circle--" + Players.playerOne}></div>
                <span>{players[Players.playerOne] + ": " + score[Players.playerOne]}</span>
            </div>
            <div className="scoreboard-player">
                <div className={"circle circle--" + Players.playerTwo}></div>
                <span>{players[Players.playerTwo] + ": " + score[Players.playerTwo]}</span>
            </div>
            <button onClick={resetScore}>Reset</button>
        </section>
    )
}

export default Scoreboard;