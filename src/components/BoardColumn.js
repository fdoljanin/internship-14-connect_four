import Cell from './Cell';

const BoardColumn = () => {
    return (
        <div>
        {Array(6).fill(0).map((e, i) => <Cell />)}
        </div>
    )
}

export default BoardColumn