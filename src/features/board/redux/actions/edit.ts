import * as NS from '../../namespace';
import { IGridSize } from 'shared/types/models';

export function tick(): NS.ITick {
  return {
    type: 'BOARD:TICK',
  };
}

export function startPlaying(payload: number): NS.IPlay {
  return {
    type: 'BOARD:PLAY',
    payload,
  };
}

export function stopPlaying(payload: number): NS.IStop {
  return {
    type: 'BOARD:STOP',
    payload,
  };
}

export function setAlive(payload: NS.ICell): NS.ISetAlive {
  return {
    type: 'BOARD:SET_ALIVE',
    payload,
  };
}

export function makeRandomGrid(payload: IGridSize): NS.IMakeRandom {
  return {
    type: 'BOARD:MAKE_RANDOM',
    payload,
  };
}

export function clear(payload: IGridSize): NS.IClear {
  return {
    type: 'BOARD:CLEAR',
    payload,
  };
}

export function resizeGrid(payload: IGridSize): NS.IResize {
  return {
    type: 'BOARD:RESIZE',
    payload,
  };
}

export function changeSpeed(payload: number): NS.IChangeSpeed {
  return {
    type: 'BOARD:CHANGE_SPEED',
    payload,
  };
}

export function changeAliveValue(payload: boolean): NS.IChangeAliveValue {
  return {
    type: 'BOARD:CHANGE_ALIVE_VALUE',
    payload,
  };
}
