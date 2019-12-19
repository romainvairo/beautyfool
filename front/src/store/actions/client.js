import {
  SET_USER,
  SET_LANGUAGE,
  SET_APPOINTMENT,
} from '../actions-type/client';

export const setUser = (value) => ({
  type: SET_USER,
  payload: value,
});

export const setLanguage = (value) => ({
    type: SET_LANGUAGE,
    payload: value,
});


export const setAppointment = (value) => ({
  type: SET_APPOINTMENT,
  payload: value,
});
