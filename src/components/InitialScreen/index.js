import "./style.css";
import { useState } from "react"
import { Players } from "../../consts";

const InitialScreen = ({ setPlayers }) => {
    const [playersForm, setPlayersForm] = useState({
        [Players.playerOne]: '',
        [Players.playerTwo]: ''
    });
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

        if (playersForm[Players.playerOne] === playersForm[Players.playerTwo]) {
            setWarning("Names should be unique!");
            return;
        }
        setPlayers(playersForm);
    }

    return (
        <form class="initial-form" onSubmit={handleSubmit}>
            <div class="initial-input__wrapper">
                <label htmlFor={Players.playerOne}>Enter first player name:</label>
                <input name={Players.playerOne}
                    onChange={handleChange}
                    value={playersForm[Players.playerOne]}
                    placeholder="Player 1 name"></input>
            </div>
            <div class="initial-input__wrapper">
                <label htmlFor={Players.playerTwo}>Enter second player name:</label>
                <input name={Players.playerTwo}
                    onChange={handleChange}
                    value={playersForm[Players.playerTwo]}
                    placeholder="Player 2 name"
                ></input>
            </div>
            <input type="submit" />
            <p className="initial-warning">{warning}</p>
        </form>
    )
}

export default InitialScreen