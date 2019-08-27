import { LIKE, LIKE_FAIL, LIKE_SUCCESS } from "../actions";
const initialState = {
  getLikesLoading: false,
  getLikes: [],
  getLikesError: null
};
export default (state = initialState, action) => {
  // const messageData = [{ id: action.messageId }];
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        getLikesLoading: true,
        getLikesError: null
      };
    case LIKE_FAIL:
      return {
        ...state,
        getLikesError: action.payload,
        getLikesLoading: false
      };
    case LIKE_SUCCESS:
      return {
        ...state,
        getLikes: action.payload.likes,
        getLikesLoading: false
      };
    default:
      return state;
  }
};
