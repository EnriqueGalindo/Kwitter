import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL } from "../actions";

const initialState = {
  getUserError: null,
  user: null,
  getUserLoading: false
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
        user: action.payload.user,
        getUserLoading: false
      };
    case GET_USER_FAIL:
      return {
        ...state,
        getUserError: action.payload,
        getUserLoading: false
      };
    default:
      return state;
  }
};
