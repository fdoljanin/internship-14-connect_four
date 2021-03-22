import { Players } from '../../consts';

const Scoreboard = ({ players, score }) => {
    return (
        <section className="scoreboard">
            <div className="scoreboard-player">
                <h5>{players[Players.playerOne]}</h5>
                <span>{score[Players.playerOne]}</span>
            </div>
            <div className="scoreboard-player">
                <h5>{players[Players.playerTwo]}</h5>
                <span>{score[Players.playerTwo]}</span>
            </div>
        </section>
    )
}

export default Scoreboard;