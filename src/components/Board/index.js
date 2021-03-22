import { useEffect, useState } from "react";
import BoardColumn from "../BoardColumn/index";
import RoundStatus from '../RoundStatus';
import { Players, WaysToWin } from '../../consts';
import { constructBoardCells } from "../../consts/defaults";
import './style.css';

const Board = ({ players, handleWin, screen }) => {
    const [boardCells, setBoardCells] = useState(constructBoardCells());
    const [currentPlayer, setCurrentPlayer] = useState(Players.playerOne);

    useEffect(()=>{ 
        if (screen==="Board")
            setBoardCells(constructBoardCells())
    }, [screen])

    const handleNextPlayer = () => {
        setCurrentPlayer(prevPlayer =>
            prevPlayer === Players.playerOne ? Players.playerTwo : Players.playerOne);
    }

    const addCoin = (column, row) => {
        setBoardCells(prev => {
            const newCells = prev.map(col => [...col]);
            newCells[column][row] = currentPlayer;
            return newCells;
        });
    }

    const isSuccess = (cells) => {
        for (let i = 0; i < cells.length - 3; ++i) {
            let match = true;
            for (let j = i + 1; j < i + 4; ++j)
                match &= cells[i] === cells[j];
            if (match) return true;
        }
        return false;
    }

    const checkWin = (column, row) => {
        for (let way of Object.values(WaysToWin)) {
            let listOfCells = [];
            for (let i = 0; i < 7; ++i)
                listOfCells.push(boardCells[column + way.x[i]]?.[row + way.y[i]]);
            listOfCells[3] = currentPlayer;

            if (isSuccess(listOfCells)) handleWin(currentPlayer);
        }

        for (let i = 0; i < boardCells.length; ++i)
            if (i === column && row === 0) continue;
            else if (boardCells[i][0] === Players.noPlayer) return;

        handleWin(Players.noPlayer);
    }

    const handleColumnClick = (column, row) => {
        addCoin(column, row);
        checkWin(column, row);
        handleNextPlayer();
    }

    return (
        <div className="round">
            <RoundStatus players={players} currentPlayer={currentPlayer} />
            <div className="board-table">
                {Array(7).fill(0).map((e, column) =>
                    <BoardColumn key={column} columnCells={boardCells[column]}
                        onColumnClick={(row) => handleColumnClick(column, row)} />)}
            </div>
        </div>
    )
}

export default Board;