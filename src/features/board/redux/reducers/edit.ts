import { combineReducers } from 'redux';
import { makeGrid, advanceGrid } from 'shared/helpers/gridManipulation';
import { GRID_HEIGHT, GRID_WIDTH } from 'core/constants';
import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';
import initial from '../initial';

type TPlayStatusState = NS.IReduxState['edit']['gameStatus'];
type TGenerationCounter = NS.IReduxState['edit']['generations'];
type TBoard = NS.IReduxState['edit']['grid'];

function gameStatusReducer(state: TPlayStatusState = initial.edit.gameStatus, action: NS.Action): TPlayStatusState {
  switch (action.type) {
    case 'BOARD:PLAY':
      return {
        timerId: action.payload,
        isRunning: true,
      };
    case 'BOARD:STOP':
      return {
        timerId: null,
        isRunning: false,
      };
    default:
     return state;
  }
}

// tslint:disable-next-line:max-line-length
function generationCounterReducer(state: TGenerationCounter = initial.edit.generations, action: NS.Action): TGenerationCounter {
  switch (action.type) {
    case 'BOARD:TICK':
      return state + 1;
    case 'BOARD:CLEAR':
      return 0;
    case 'BOARD:MAKE_RANDOM':
      return 0;
    default:
      return state;
  }
}

function boardReducer(state: TBoard = initial.edit.grid, action: NS.Action): TBoard {
  switch (action.type) {
    case 'BOARD:TOGGLE_ALIVE':
      const board = state.slice(0);
      const cell = board[action.payload.x][action.payload.y];
      cell.alive = !cell.alive;
      cell.newBorn = !cell.newBorn;
      return board;
    case 'BOARD:MAKE_RANDOM':
      return makeGrid(GRID_HEIGHT, GRID_WIDTH, true);
    case 'BOARD:CLEAR':
      return makeGrid(GRID_HEIGHT, GRID_WIDTH);
    case 'BOARD:TICK':
      return advanceGrid(state.slice(0));
    default:
      return state;
  }
}

export default combineReducers({
  grid: boardReducer,
  generations: generationCounterReducer,
  gameStatus: gameStatusReducer,
} as ReducersMap<NS.IReduxState['edit']>);
