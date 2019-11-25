import { Middleware, mapState } from 'dynamic-redux';
import i18n from 'i18next';

export const setLanguageMiddleware = new Middleware('language', 'set').callback(store => next => action => {
  // delete the charaters after the "-", keep from character 0 to "-"
  action.payload = action.payload('-')[0];
  // get the actual value in the state
  const state = mapState('client: language')(store.getState());

  // avoid to update the language if the language is the same as the current one
  if (action.payload !== state.language) {
    // update the language in i18next
    i18n.changeLanguage(action.payload);
    // update the language in the state
    next();
  }
});
