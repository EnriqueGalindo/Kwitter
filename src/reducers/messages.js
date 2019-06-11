import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  GET_USER_MESSAGES,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_FAIL
} from "../actions";

const initialState = {
  getMessagesLoading: false,
  messages: [],
  getMessagesError: null,
  getUserMessagesLoading: false,
  userMessages: [],
  getUserMessagesError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        getMessagesLoading: true
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages,
        getMessagesLoading: false
      };
    case GET_MESSAGES_FAIL:
      return {
        ...state,
        getMessagesError: action.payload,
        getMessagesLoading: false
      };
    case GET_USER_MESSAGES:
      return {
        ...state,
        getUserMessagesLoading: true,
        getUserMessagesError: null
      };
    case GET_USER_MESSAGES_SUCCESS:
      return {
        ...state,
        userMessages: action.payload.messages,
        getUserMessagesLoading: false
      };
    case GET_USER_MESSAGES_FAIL:
      return {
        ...state,
        getUserMessagesError: action.payload,
        getUserMessagesLoading: false
      };
    default:
      return state;
  }
};
