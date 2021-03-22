import {Players} from '../../consts';
import './style.css';

const Cell = ({cellValue}) => {
    let cellClass = "cell ";
    switch (cellValue) {
        case Players.playerOne:
            cellClass+='cell-first__player';
            break;
        case Players.playerTwo:
            cellClass+="cell-second__player";
            break;
        default:
    }
    
    return (
        <div className={cellClass}>
        </div>
    )
}

export default Cell