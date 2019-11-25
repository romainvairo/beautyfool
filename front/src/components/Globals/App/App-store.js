import React from 'react';
import { Provider } from 'react-redux';

import store from '../../../store';
import AppContainer from './App-container';

const AppStore = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default AppStore;
