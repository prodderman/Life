import * as NS from '../namespace';
import { makeGrid } from 'shared/helpers/gridManipulation';

const gridSizesInit = {
  width: 50,
  height: 40,
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
  },
};

export default initialState;
