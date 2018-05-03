import * as NS from '../../namespace';

export function tick(): NS.ITick {
  return {
    type: 'BOARD:TICK',
  };
}

export function startPlaying(payload: NS.TTimerId): NS.IPlay {
  return {
    type: 'BOARD:PLAY',
    payload,
  };
}

export function stopPlaying(payload: NS.TTimerId): NS.IStop {
  return {
    type: 'BOARD:STOP',
    payload,
  };
}

export function toggleAlive(payload: NS.ILocationCell): NS.IToggleAlive {
  return {
    type: 'BOARD:TOGGLE_ALIVE',
    payload,
  };
}

export function makeRandomGrid(): NS.IMakeRandom {
  return {
    type: 'BOARD:MAKE_RANDOM',
  };
}

export function clear(): NS.IClear {
  return {
    type: 'BOARD:CLEAR',
  };
}
