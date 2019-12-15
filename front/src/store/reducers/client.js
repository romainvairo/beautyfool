import {
  SET_USER,
  SET_LANGUAGE,
} from '../actions-type/client'

const initialState = {
  user: {
    _id: 'rgf1hr4tf1h7tr1rtf',
    logged: true,
    username: 'Zougui',
    roles: [{ name: 'admin' }]
  },
  language: 'en',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      console.log({
        ...state,
        user: action.payload,
      })
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
