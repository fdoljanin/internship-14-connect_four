import Cell from '../Cell/index';
import { Players } from '../../consts';
import './style.css';

const BoardColumn = ({ columnCells, onColumnClick }) => {

    const handleClick = () => {
        const highestCoin = columnCells.findIndex(cell => cell !== Players.noPlayer);
        
        if (highestCoin === 0) return;
        if (highestCoin === -1) return onColumnClick(columnCells.length - 1);
        onColumnClick(highestCoin - 1);
    }

    return (
        <div className={columnCells[0]===Players.noPlayer ? "board-column":"board-column--full"} 
        onClick={handleClick}>
            {Array(6).fill(0).map((e, i) => <Cell key={i} cellValue={columnCells[i]} />)}
        </div>
    )
}

export default BoardColumn