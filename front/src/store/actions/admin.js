import { SET_ADMIN_USER } from '../actions-type/admin';

export const setAdminUser = (value) => ({
  type: SET_ADMIN_USER,
  payload: value,
});
