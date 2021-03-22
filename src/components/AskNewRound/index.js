import { Players } from '../../consts';
import './style.css';

const AskNewRound = ({ players, winner, playNewRound }) => {
    return (
        <div className={"round-new round-new--" + winner} >
            {winner !== Players.noPlayer ?
                <h2>{players[winner]} won!</h2>
                :
                <h2>It's a draw!</h2>
            }
            <p>New round?</p>
            <button onClick={playNewRound}>Play</button>
        </div>
    )
}

export default AskNewRound;