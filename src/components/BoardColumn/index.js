import './style.css';
import Cell from '../Cell/index';
import { Players } from '../../consts';

const BoardColumn = ({ columnCells, onColumnClick }) => {

    const handleClick = () => {
        const highestCell = columnCells.findIndex(cell => cell !== Players.noPlayer);
        
        if (highestCell === 0) return;
        if (highestCell === -1) return onColumnClick(columnCells.length - 1);
        onColumnClick(highestCell - 1);
    }

    return (
        <div className="board-column" onClick={handleClick}>
            {Array(6).fill(0).map((e, i) => <Cell key={i} cellValue={columnCells[i]} />)}
        </div>
    )
}

export default BoardColumn