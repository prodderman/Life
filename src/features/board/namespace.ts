import { IPlainAction, IAction } from 'shared/types/redux';
import { IRow } from 'shared/types/models';

export interface IReduxState {
  edit: {
    grid: IRow[];
    generations: number;
    gameStatus: {
      timerId: TTimerId,
      isRunning: boolean,
    }
  };
}

export type IToggleAlive = IAction<'BOARD:TOGGLE_ALIVE', ILocationCell>;
export type IMakeRandom = IPlainAction<'BOARD:MAKE_RANDOM'>;
export type ITick = IPlainAction<'BOARD:TICK'>;
export type IPlay = IAction<'BOARD:PLAY', TTimerId>;
export type IStop = IAction<'BOARD:STOP', TTimerId>;
export type IClear = IPlainAction<'BOARD:CLEAR'>;

export interface ILocationCell {
  x: number;
  y: number;
}

export type TTimerId = NodeJS.Timer | null;

export type Action =
  | IToggleAlive | IMakeRandom | ITick | IPlay | IStop | IClear;
