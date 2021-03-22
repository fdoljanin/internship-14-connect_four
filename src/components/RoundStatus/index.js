const RoundStatus = ({players, currentPlayer}) => {
    return (
        <div>
            <p>Current player: {players[currentPlayer]}</p>
        </div>
    )
}

export default RoundStatus;