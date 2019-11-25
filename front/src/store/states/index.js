import { CombineStates } from 'dynamic-redux';

import clientState from './client';
import routerState from './router';

export default new CombineStates([
  clientState,
  routerState,
]);
