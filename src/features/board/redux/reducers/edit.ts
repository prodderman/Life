import { combineReducers } from 'redux';
import { makeGrid, advanceGrid } from 'shared/helpers/gridManipulation';
import { ReducersMap } from 'shared/types/redux';
import * as NS from '../../namespace';
import initial from '../initial';

type TPlayStatusState = NS.IReduxState['edit']['gameStatus'];
type TGenerationCounter = NS.IReduxState['edit']['generations'];
type TBoard = NS.IReduxState['edit']['grid'];
type TGridSize = NS.IReduxState['edit']['gridSize'];

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
      return makeGrid(action.payload, true);
    case 'BOARD:CLEAR':
      return makeGrid(action.payload);
    case 'BOARD:RESIZE':
      return makeGrid(action.payload);
    case 'BOARD:TICK':
      return advanceGrid(state.slice(0));
    default:
      return state;
  }
}

function gridSizeReducer(state: TGridSize = initial.edit.gridSize, action: NS.Action): TGridSize {
  switch (action.type) {
    case 'BOARD:RESIZE':
      const newGridSize = action.payload;
      return newGridSize;
    default:
      return state;
  }
}

export default combineReducers({
  grid: boardReducer,
  generations: generationCounterReducer,
  gameStatus: gameStatusReducer,
  gridSize: gridSizeReducer,
} as ReducersMap<NS.IReduxState['edit']>);
