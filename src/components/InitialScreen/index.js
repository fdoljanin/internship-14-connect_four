import { useState } from "react"
import { Players } from "../../consts";

const InitialScreen = ({setPlayers}) => {
    const [playersForm, setPlayersForm] = useState();

    const handleChange = ({ target: { name, value } }) => {
        setPlayersForm((prevState) => ({ ...prevState, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayers(playersForm);
    }

    return (
    <form onSubmit={handleSubmit}>
        <input name={Players.playerOne} onChange={handleChange}></input>
        <input name={Players.playerTwo} onChange={handleChange}></input>
        <input type="submit"/> 
    </form>
    )
}

export default InitialScreen