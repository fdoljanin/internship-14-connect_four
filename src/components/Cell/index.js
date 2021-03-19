const Cell = ({players, cellValue}) => {
    let cellClass = "cell ";
    switch (cellValue) {
        case players.playerOne:
            cellClass='cell-first__player';
            break;
        case players.playerTwo:
            cellClass+="cell-first__player";
            break;
        default:
    }
    
    return (
        <div className={cellClass}>
        </div>
    )
}

export default Cell