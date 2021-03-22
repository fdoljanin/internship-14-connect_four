import { Players } from "../consts";

export const constructBoardCells = () => Array(7).fill(Array(6).fill(Players.noPlayer));