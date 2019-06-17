import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAIL,
  GET_USER_MESSAGES,
  GET_USER_MESSAGES_SUCCESS,
  GET_USER_MESSAGES_FAIL,
  UPDATE_MESSAGE_BY_ID,
  UPDATE_MESSAGE_BY_ID_SUCCESS,
  UPDATE_MESSAGE_BY_ID_FAIL
} from "../actions";

const initialState = {
  getMessagesLoading: false,
  messages: [],
  getMessagesError: null,
  getUserMessagesLoading: false,
  userMessages: [],
  getUserMessagesError: null,
  updateMessageByIdLoading: false,
  updateMessageByIdError: null
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
    case UPDATE_MESSAGE_BY_ID:
      return {
        ...state,
        updateMessageByIdLoading: true,
        updateMessageByIdError: null
      };
    case UPDATE_MESSAGE_BY_ID_SUCCESS:
      const newMessages = state.messages.map(message =>
        message.id === action.payload.message.id
          ? action.payload.message
          : message
      );
      const newUserMessages = state.userMessages.map(message =>
        message.id === action.payload.message.id
          ? action.payload.message
          : message
      );
      return {
        ...state,
        updateMessageByIdLoading: false,
        messages: newMessages,
        userMessages: newUserMessages
      };
    case UPDATE_MESSAGE_BY_ID_FAIL:
      return {
        ...state,
        updateMessageByIdError: action.payload,
        updateMessageByIdLoading: false
      };
    default:
      return state;
  }
};
