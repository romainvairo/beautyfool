import { SET_ADMIN_USER } from '../actions-type/admin';

export const setAdminUserMiddleware = store => next => action => {
  if (action.type === SET_ADMIN_USER) {
    // get the actual value in the state
    const state = store.getState();

    const { user } = state.adminReducer;

    // avoid to update the user if the user is the same
    if(action.payload._id !== user._id) {
      // go to next middleware or the reducer if there's no more reducer
      next(action);
    }
  } else {
    next(action);
  }
}
