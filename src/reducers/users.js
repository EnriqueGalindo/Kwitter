import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL, REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from "../actions";

const initialState = {
  getUserLoading: false,
  getUser: {},
  getUserError: null,
  registerUser: {},
  registerUserLoading: false,
  registerUserError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        getUserLoading: true,
        getUserError: null
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        getUser: action.payload.user,
        getUserLoading: false
      }
    case GET_USER_FAIL:
      return {
        ...state,
        getUserError: action.payload,
        getUserLoading: false
      }
      case REGISTER_USER:
      return {
        ...state,
        registerUserLoading: true,
        registerUserError: null
      }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUser: action.payload,
        registerUserLoading: false
      }
    case REGISTER_USER_FAIL:
      return {
        ...state,
        registerUserError: action.payload,
        registerUserLoading: false
      }
    default:
      return state;
  }
};
