import { combineReducers } from 'redux';

import clientReducer from './client';
import adminReducer from './admin';

const reducers = combineReducers({
  clientReducer,
  adminReducer,
});

export default reducers;
