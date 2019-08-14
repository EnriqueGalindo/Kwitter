import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_GOOGLE_SUCCESS,
  LOGIN_GOOGLE,
  LOGIN_GOOGLE_FAIL
} from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null
};

const getInitState = () => {
  return JSON.parse(localStorage.getItem("auth")) || initialState;
};

export default (state = getInitState(), action) => {
  switch (action.type) {
    case LOGIN:
    case LOGIN_GOOGLE:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
    case LOGIN_GOOGLE_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
    case LOGIN_FAIL:
    case LOGIN_GOOGLE_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };
    case LOGOUT_SUCCESS:
      return { ...initialState };
    default:
      return state;
  }
};
