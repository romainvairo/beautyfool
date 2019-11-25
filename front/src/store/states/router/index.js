import { DynamicState } from 'dynamic-redux';

const routerState = new DynamicState('router', {
  cachedComponents: {},
}, {
  // strictTyping : is an option that will locks the type of values in the state
  strictTyping: !global.isProd,
});

routerState.createActions({
  cachedComponents: 'merge',
});

export default routerState;
