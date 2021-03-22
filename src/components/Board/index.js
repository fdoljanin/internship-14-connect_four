import './style.css';
import { useState } from "react";
import { constructBoardCells } from "../../consts/defaults";
import BoardColumn from "../BoardColumn/index";
import { Players } from '../../consts';
import RoundStatus from '../RoundStatus';

const Board = ({ players }) => {
    const [boardCells, setBoardCells] = useState(constructBoardCells());
    const [currentPlayer, setCurrentPlayer] = useState(Players.playerOne);

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
        console.log(cells);
        for (let i = 0; i < cells.length - 4; ++i) {
            let match = true;
            for (let j = i + 1; j < i + 4; ++j)
                match &= cells[i] === cells[j];
            if (match) return true;
        }
        return false;
    }

    const checkWin = (column, row) => {
        let waysToWin = {
            horizontal: {
                x: [-3, -2, -1, 0, 1, 2, 3],
                y: [0, 0, 0, 0, 0, 0, 0, 0]
            },
            vertical: {
                x: [0, 0, 0, 0, 0, 0, 0, 0],
                y: [-3, -2, -1, 0, 1, 2, 3]
            },
            diagonalPositive: {
                x: [-3, -2, -1, 0, 1, 2, 3],
                y: [-3, -2, -1, 0, 1, 2, 3]
            },
            diagonalNegative: {
                x: [-3, -2, -1, 0, 1, 2, 3],
                y: [3, 2, 1, 0, -1, -2, -3]
            }
        };

        for (let way of Object.values(waysToWin)) {
            let listOfCells = [];
            for (let i = 0; i < 7; ++i)
                //console.log(column+way.x[i], row+way.y[i]);
                listOfCells.push(boardCells[column + way.x[i]]?.[row + way.y[i]]);
            if (isSuccess(listOfCells)) alert("win");
        }
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
                {Array(7).fill(0).map((e, i) => <BoardColumn key={i} columnCells={boardCells[i]} onColumnClick={(row) => handleColumnClick(i, row)} />)}
            </div>
        </div>
    )
}

export default Board;