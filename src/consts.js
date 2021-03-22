import {generateList} from './consts/utils';

export const Players = {
  playerOne: "playerOne",
  playerTwo: "playerTwo",
  noPlayer: "noPlayer"
};

export const WaysToWin = {
  horizontal: {
    x: generateList(-3,3),
    y: Array(7).fill(0)
  },
  vertical: {
    x: Array(7).fill(0),
    y: generateList(-3,3)
  },
  diagonalPositive: {
    x: generateList(-3,3),
    y: generateList(-3,3)
  },
  diagonalNegative: {
    x: generateList(-3,3),
    y:generateList(3,-3)
  }
};