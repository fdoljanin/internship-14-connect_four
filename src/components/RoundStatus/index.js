import './style.css';

const RoundStatus = ({ players, currentPlayer }) => {
    return (
        <div className="round-status">
            <p>Current player: {players[currentPlayer]}</p>
            <div className={"circle circle--" + currentPlayer}></div>
        </div>
    )
}

export default RoundStatus;