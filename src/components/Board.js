import { useState } from "react";
import BoardColumn from "./BoardColumn";

const Board = () => {
    const [boardCells, setBoardCells] = useState();
    const [currentPlayer, setCurrentPlayer] = useState();
    return (
        <div>
            <BoardColumn />
        </div>
    )
}

export default Board;