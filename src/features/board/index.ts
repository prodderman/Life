import * as namespace from './namespace';
import { actions, selectors, reducer } from './redux';
import { IReduxEntry } from 'shared/types/app';

export { namespace, selectors, actions, reducer };
export * from './view/containers';

function getReduxEntry(): IReduxEntry {
  return {
    reducers: { board: reducer },
  };
}

export default getReduxEntry();
