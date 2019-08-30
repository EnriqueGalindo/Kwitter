import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGOUT_SUCCESS,
  GET_USERNAME,
  GET_USERNAME_FAIL,
  GET_USERNAME_SUCCESS
} from "../actions";

const initialState = {
  getUserLoading: false,
  getUser: {},
  getUserError: null,
  registerUser: {},
  registerUserLoading: false,
  registerUserError: null,
  uploadUserPictureLoading: false,
  uploadUserPicture: {},
  uploadUserPictureError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        getUserLoading: true,
        getUserError: null
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        getUser: action.payload.user,
        getUserLoading: false
      };
    case GET_USER_FAIL:
      return {
        ...state,
        getUserError: action.payload,
        getUserLoading: false
      };
    case REGISTER_USER:
      return {
        ...state,
        registerUserLoading: true,
        registerUserError: null
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUser: action.payload,
        registerUserLoading: false
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        registerUserError: action.payload,
        registerUserLoading: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState
      };
    case GET_USERNAME:
      return {
        ...state,
        getUsernameLoading: true,
        getUsernameError: null
      };

    case GET_USERNAME_SUCCESS:
      return {
        ...state,
        getUsername: action.payload,
        getUsernameLoading: false
      };

    case GET_USERNAME_FAIL:
      return {
        ...state,
        getUsernameError: action.payload,
        getUsernameLoading: false
      };

    default:
      return state;
  }
};
