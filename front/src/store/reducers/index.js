import { combineReducers } from 'redux';

import clientReducer from './client';

const reducers = combineReducers({
  clientReducer,
});

export default reducers;
