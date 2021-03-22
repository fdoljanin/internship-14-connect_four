import './style.css';

const AskNewRound= ({players, winner, playNewRound}) => {
    return (
        <div class={"round-new round-new--" + winner} >
            <h2>{players[winner]} won!</h2>
            <p>New round?</p>
            <button onClick={playNewRound}>Play</button>
        </div>
    )
}

export default AskNewRound;