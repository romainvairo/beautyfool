import {
  SET_ADMIN_USER,
} from '../actions-type/admin'

const initialState = {
  user : {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
