import { SET_USER, SET_LANGUAGE } from '../actions-type/client';

export const setUser = (value) => ({
  type: SET_USER,
  payload: value,
});

export const setLanguage = (value) => ({
    type: SET_LANGUAGE,
    payload: value,
});
