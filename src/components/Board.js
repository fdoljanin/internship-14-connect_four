import { useState } from "react";
import { constructBoardCells } from "../consts/defaults";
import BoardColumn from "./BoardColumn";

const Board = (players) => {
    const [boardCells, setBoardCells] = useState(constructBoardCells());
    const [currentPlayer, setCurrentPlayer] = useState(players.firstPlayer);
    

    const handleNextPlayer = () => {
        setCurrentPlayer(prevPlayer =>
            prevPlayer === players.playerOne ? players.playerTwo : players.playerOne);
    }

    const addCoin = (column, row) => {
        setBoardCells(prev => {
            const newCells = prev.map(col => [...col]);
            newCells[column][row] = currentPlayer;
            return newCells;
        })
    }

    return (
        <div>
            {Array(7).fill(0).map((e, i) => <BoardColumn key={i} columnCells={boardCells[i]}/>)}
        </div>
    )
}

export default Board;