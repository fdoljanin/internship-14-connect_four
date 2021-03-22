import "./style.css";
import { useState } from "react"
import { Players } from "../../consts";

const initialState = {
    [Players.playerOne]: '',
    [Players.playerTwo]: ''
}

const InitialScreen = ({ setPlayers }) => {
    const [playersForm, setPlayersForm] = useState(initialState);
    const [warning, setWarning] = useState();

    const handleChange = ({ target: { name, value } }) => {
        setPlayersForm((prevState) => ({ ...prevState, [name]: value.trimStart() }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(playersForm[Players.playerOne] && playersForm[Players.playerTwo])) {
            setWarning("Enter player names!");
            return;
        }

        if (playersForm[Players.playerOne].trim() === playersForm[Players.playerTwo].trim()) {
            setWarning("Names should be unique!");
            return;
        }
        setPlayers(() => {
            let copy = {...playersForm};
            copy.playerOne = copy.playerOne.trim();
            copy.playerTwo = copy.playerTwo.trim();
            return copy;
        });
    }

    return (
        <form className="initial-form" onSubmit={handleSubmit}>
            <div className="initial-input__wrapper">
                <label htmlFor={Players.playerOne}>Enter first player name:</label>
                <input name={Players.playerOne}
                    onChange={handleChange}
                    value={playersForm[Players.playerOne]}
                    placeholder="Player 1 name"></input>
            </div>
            <div className="initial-input__wrapper">
                <label htmlFor={Players.playerTwo}>Enter second player name:</label>
                <input name={Players.playerTwo}
                    onChange={handleChange}
                    value={playersForm[Players.playerTwo]}
                    placeholder="Player 2 name"
                ></input>
            </div>
            <button type="submit">Play</button>
            <p className="initial-warning">{warning}</p>
        </form>
    )
}

export default InitialScreen