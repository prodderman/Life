import { IPlainAction, IAction } from 'shared/types/redux';
import { IRow } from 'shared/types/models';

export interface IReduxState {
  edit: {
    grid: IRow[];
    generations: number;
    gameStatus: {
      timerId: number | null,
      isRunning: boolean,
    }
  };
}

export type IToggleAlive = IAction<'BOARD:TOGGLE_ALIVE', ILocationCell>;
export type IMakeRandom = IPlainAction<'BOARD:MAKE_RANDOM'>;
export type ITick = IPlainAction<'BOARD:TICK'>;
export type IPlay = IAction<'BOARD:PLAY', {timerId: number}>;
export type IStop = IAction<'BOARD:STOP', {timerId: number}>;
export type IClear = IPlainAction<'BOARD:CLEAR'>;

export interface ILocationCell {
  x: number;
  y: number;
}

export interface ITimerId {
  timerId: number;
}

export type Action =
  | IToggleAlive | IMakeRandom | ITick | IPlay | IStop | IClear;
