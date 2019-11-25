import { DynamicState } from 'dynamic-redux';

const routerState = new DynamicState('router', {
  cachedComponents: {},
});

routerState.createActions({
  cachedComponents: 'merge',
});

export default routerState;
