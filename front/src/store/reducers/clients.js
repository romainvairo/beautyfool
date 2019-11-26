import SET_USER from '../actions-type';
import SET_LANGUAGE

const initialState = {
  user : {},
  language: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_LANGUAGE':
      return {
        language: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
