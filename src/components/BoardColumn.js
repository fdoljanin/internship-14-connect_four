import Cell from './Cell/index';

const BoardColumn = ({ cells }) => {
    return (
        <div>
            {Array(6).fill(0).map((e, i) => <Cell key={i} />)}
        </div>
    )
}

export default BoardColumn