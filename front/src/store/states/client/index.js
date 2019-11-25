import { DynamicState } from 'dynamic-redux';

import { setLanguageMiddleware } from '../middlewares';

// new : create an object's instance
const clientState = new DynamicState('client', {
  user: {},
  language: '',
}, {
  // strictTyping : is an option that will locks the type of values in the state
  strictTyping: !global.isProd,
});

// create actions for the state
clientState.createActions({
  user: 'set',
  language: 'set',
});

// create middlewares for the state
clientState.createMiddlewares([
  setLanguageMiddleware,
]);

export default clientState;
