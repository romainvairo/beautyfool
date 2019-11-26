import { SET_LANGUAGE } from '../actions-type/client';

export const setLanguageMiddleware = store => next => action => {
  if (action.type === SET_LANGUAGE) {
    // delete the charaters after the "-", keep from character 0 to "-"
    action.payload = action.payload.split('-')[0];
    // get the actual value in the state
    const state = store.getState();

    const language = state.clientReducer.language;

    // avoid to update the language if the language is the same as the current one
    if(action.payload !== language) {
      // go to next middleware or the reducer if there's no more reducer
      next();
    }
  } else {
    next();
  }
}
