import {
  SET_ADMIN_USER,
  SET_ADMIN_ACTUALITY,
  SET_ADMIN_APPOINTMENT,
  SET_ADMIN_BEAUTY_TIPS,
  SET_ADMIN_CATEGORY,
  SET_ADMIN_COMMENT,
  SET_ADMIN_FEEDBACK,
  SET_ADMIN_IMAGE,
  SET_ADMIN_QUESTION,
  SET_ADMIN_ROLE,
  SET_ADMIN_SERVICE,
  SET_ADMIN_DATA,
} from '../actions-type/admin'

const initialState = {
  actuality : {},
  appointment : {},
  beautyTip : {},
  category : {},
  comment : {},
  feedback : {},
  image : {},
  question : {},
  role : {},
  service : {},
  user : {},
  data : {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_ADMIN_ACTUALITY:
      return {
        ...state,
        actuality: action.payload,
      };
    case SET_ADMIN_APPOINTMENT:
      return {
        ...state,
        appointment: action.payload,
      };
    case SET_ADMIN_BEAUTY_TIPS:
      return {
        ...state,
        beautyTip: action.payload,
      };
    case SET_ADMIN_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_ADMIN_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case SET_ADMIN_FEEDBACK:
      return {
        ...state,
        feedback: action.payload,
      };
    case SET_ADMIN_IMAGE:
      return {
        ...state,
        image: action.payload,
      };
    case SET_ADMIN_QUESTION:
      return {
        ...state,
        question: action.payload,
      };
    case SET_ADMIN_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case SET_ADMIN_SERVICE:
      return {
        ...state,
        service: action.payload,
      };
      case SET_ADMIN_DATA:
      return {
        ...state,
        data: action.payload,
      };


    default:
      return state;
  }
}

export default reducer;
