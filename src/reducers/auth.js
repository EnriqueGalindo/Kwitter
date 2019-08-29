import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS
} from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null,
  logoutLoading: false,
  logoutError: null
};

const getInitState = () => {
  return JSON.parse(localStorage.getItem("auth")) || initialState;
};

export default (state = getInitState(), action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        login: action.payload, 
        loginLoading: false 
      };
    case LOGIN_FAIL:
      return { 
        ...state, 
        loginError: action.payload, 
        loginLoading: false 
      };
    case LOGOUT:
      return {
        ...state
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
