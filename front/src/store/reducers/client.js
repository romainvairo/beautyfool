import {
  SET_USER,
  SET_LANGUAGE,
} from '../actions-type/client'

const initialState = {
  user : {},
  language: 'en',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
