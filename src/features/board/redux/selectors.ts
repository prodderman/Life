import { IAppReduxState } from 'shared/types/app';
import { IRow } from 'shared/types/models/Board';
import * as NS from '../namespace';

export function getFeatureState(state: IAppReduxState): NS.IReduxState {
  if (!state.board) {
    throw new Error('Cannot find board feature state!');
  }

  return state.board;
}

export function getGrid(state: IAppReduxState): IRow[] {
  return getFeatureState(state).edit.grid;
}

export function getGameStatus(state: IAppReduxState): NS.IReduxState['edit']['gameStatus'] {
  return getFeatureState(state).edit.gameStatus;
}

export function getGenerations(state: IAppReduxState): NS.IReduxState['edit']['generations'] {
  return getFeatureState(state).edit.generations;
}

export function getGridSize(state: IAppReduxState): NS.IReduxState['edit']['gridSize'] {
  return getFeatureState(state).edit.gridSize;
}

export function getGameSpeed(state: IAppReduxState): NS.IReduxState['edit']['gameSpeed'] {
  return getFeatureState(state).edit.gameSpeed;
}

export function getAliveValue(state: IAppReduxState): NS.IReduxState['edit']['aliveValue'] {
  return getFeatureState(state).edit.aliveValue;
}
