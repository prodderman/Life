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
