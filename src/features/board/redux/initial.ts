import * as NS from '../namespace';
import { makeGrid } from 'shared/helpers/gridManipulation';

const gridSizesInit = {
  width: 40,
  height: 30,
};

const initialState: NS.IReduxState = {
  edit: {
    grid: makeGrid(gridSizesInit),
    generations: 0,
    gameStatus: {
      timerId: null,
      isRunning: false,
    },
    gridSize: gridSizesInit,
    gameSpeed: 10,
    aliveValue: false,
  },
};

export default initialState;
