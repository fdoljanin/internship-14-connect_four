import { useState } from "react"

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
        <input name="playerOne" onChange={handleChange}></input>
        <input name="playerTwo" onChange={handleChange}></input>
        <input type="submit"/> 
    </form>
    )
}

export default InitialScreen