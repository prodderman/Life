import { IPlainAction, IAction } from 'shared/types/redux';
import { IRow, IGridSize } from 'shared/types/models';

export interface IReduxState {
  edit: {
    grid: IRow[];
    generations: number;
    gameStatus: IGameStatus;
    gridSize: IGridSize;
    gameSpeed: number;
  };
}

export type IToggleAlive = IAction<'BOARD:TOGGLE_ALIVE', ILocationCell>;
export type IMakeRandom = IAction<'BOARD:MAKE_RANDOM', IGridSize>;
export type ITick = IPlainAction<'BOARD:TICK'>;
export type IPlay = IAction<'BOARD:PLAY', number>;
export type IStop = IAction<'BOARD:STOP', number>;
export type IClear = IAction<'BOARD:CLEAR', IGridSize>;
export type IResize = IAction<'BOARD:RESIZE', IGridSize>;
export type IChangeSpeed = IAction<'BOARD:CHANGE_SPEED', number>;

export interface ILocationCell {
  x: number;
  y: number;
}

export interface IGameStatus {
  timerId: number | null;
  isRunning: boolean;
}

export type Action =
  | IToggleAlive | IMakeRandom | ITick | IPlay | IStop | IClear | IResize | IChangeSpeed;
