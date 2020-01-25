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
} from '../actions-type/admin';

export const setAdminUser = (value) => ({ type: SET_ADMIN_USER, payload: value, });
export const setAdminActuality = (value) => ({ type: SET_ADMIN_ACTUALITY, payload: value, });
export const setAdminAppointment = (value) => ({ type: SET_ADMIN_APPOINTMENT, payload: value, });
export const setAdminBeautyTip = (value) => ({ type: SET_ADMIN_BEAUTY_TIPS, payload: value, });
export const setAdminCategory = (value) => ({ type: SET_ADMIN_CATEGORY, payload: value, });
export const setAdminComment = (value) => ({ type: SET_ADMIN_COMMENT, payload: value, });
export const setAdminFeedback = (value) => ({ type: SET_ADMIN_FEEDBACK, payload: value, });
export const setAdminImage = (value) => ({ type: SET_ADMIN_IMAGE, payload: value, });
export const setAdminQuestion = (value) => ({ type: SET_ADMIN_QUESTION, payload: value, });
export const setAdminRole = (value) => ({ type: SET_ADMIN_ROLE, payload: value, });
export const setAdminService = (value) => ({ type: SET_ADMIN_SERVICE, payload: value, });
export const setAdminData = (value) => ({ type: SET_ADMIN_DATA, payload: value });
