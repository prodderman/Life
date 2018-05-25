import { IPlainAction, IAction } from 'shared/types/redux';
import { IRow, IGridSize } from 'shared/types/models';

export interface IReduxState {
  edit: {
    grid: IRow[];
    generations: number;
    gameStatus: IGameStatus;
    gridSize: IGridSize;
    gameSpeed: number;
    aliveValue: boolean;
  };
}

export type ISetAlive = IAction<'BOARD:SET_ALIVE', ICell>;
export type IMakeRandom = IAction<'BOARD:MAKE_RANDOM', IGridSize>;
export type ITick = IPlainAction<'BOARD:TICK'>;
export type IPlay = IAction<'BOARD:PLAY', number>;
export type IStop = IAction<'BOARD:STOP', number>;
export type IClear = IAction<'BOARD:CLEAR', IGridSize>;
export type IResize = IAction<'BOARD:RESIZE', IGridSize>;
export type IChangeSpeed = IAction<'BOARD:CHANGE_SPEED', number>;
export type IChangeAliveValue = IAction<'BOARD:CHANGE_ALIVE_VALUE', boolean>;

export interface ICell {
  x: number;
  y: number;
  value: boolean;
}

export interface IGameStatus {
  timerId: number | null;
  isRunning: boolean;
}

export type Action =
  | ISetAlive | IMakeRandom | ITick | IPlay | IStop | IClear | IResize | IChangeSpeed | IChangeAliveValue;
