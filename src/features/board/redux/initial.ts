import * as NS from '../namespace';
import { GRID_WIDTH, GRID_HEIGHT } from 'core/constants';
import { makeGrid } from 'shared/helpers/gridManipulation';

const initialState: NS.IReduxState = {
  edit: {
    grid: makeGrid(GRID_HEIGHT, GRID_WIDTH),
    generations: 0,
    gameStatus: {
      timerId: null,
      isRunning: false,
    },
  },
};

export default initialState;
