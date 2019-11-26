import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';
import middlewares from './middlewares';

let devtools;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true });
}

const enhancers = compose(
  applyMiddleware(...Object.values(middlewares)),
  devtools
);

export default createStore(reducers, enhancers);
