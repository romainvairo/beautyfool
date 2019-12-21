import {
  SET_USER,
  SET_LANGUAGE,
  SET_APPOINTMENT,
} from '../actions-type/client'

const initialState = {
  user: {
    username: 'Zougui',
    roles: [{ name: 'user', permission: 'ROLE_USER' }, { name: 'admin', permission: 'ROLE_ADMIN' }],
    logged: true,
  },
  language: 'en',
  appointment: {
    services: [],
    totalDuration: 0,
    totalPrice: 0,
    queryString: '',
  },
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
    case SET_APPOINTMENT:
      return {
        ...state,
        appointment: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
