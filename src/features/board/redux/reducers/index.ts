import { combineReducers } from 'redux';

import * as NS from '../../namespace';
import editReducer from './edit';

const reducer = combineReducers<NS.IReduxState>({
  edit: editReducer,
});

export default reducer;
