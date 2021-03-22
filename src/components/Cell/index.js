import {Players} from '../../consts';
import './style.css';

const Cell = ({cellValue}) => {
    return (
        <div className={"cell cell--"+cellValue}>
        </div>
    )
}

export default Cell