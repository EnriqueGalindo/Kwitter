import {
  ADD_LIKE,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_FAIL,
  REMOVE_LIKE,
  REMOVE_LIKE_SUCCESS,
  REMOVE_LIKE_FAIL
} from "../actions";

const initialState = {
  toggleLikeError: null,
  toggleLikeLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        toggleLikeLoading: true,
        toggleLikeError: null
      };
    case ADD_LIKE_SUCCESS:
      return {
        ...state,
        toggleLikeLoading: false
      };
    case ADD_LIKE_FAIL:
      return {
        ...state,
        toggleLikeLoading: false,
        toggleLikeError: action.payload
      };
    case REMOVE_LIKE:
      return {
        ...state,
        toggleLikeLoading: true,
        toggleLikeError: null
      };
    case REMOVE_LIKE_SUCCESS:
      return {
        ...state,
        toggleLikeLoading: false
      };
    case REMOVE_LIKE_FAIL:
      return {
        ...state,
        toggleLikeLoading: false,
        toggleLikeError: action.payload
      };
    default:
      return state;
  }
};
