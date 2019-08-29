import {
  DISPLAY_MESSAGE_BOARD,
  DISPLAY_MESSAGE_BOARD_FAIL,
  DISPLAY_MESSAGE_BOARD_SUCCESS,
  DELETE_MESSAGE,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAIL
} from "../actions";

const initialState = {
  getMessagesLoading: false,
  getMessages: [],
  getMessagesError: null,
  getUserMessages: [],
  deleteMessageError: null,
  deleteMessageLoading: false,
  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE_BOARD:
      return {
        ...state,
        getMessagesLoading: true,
        getMessagesError: null
      };

    case DISPLAY_MESSAGE_BOARD_FAIL:
      return {
        ...state,
        getMessagesError: action.payload,
        getMessagesLoading: false
      };

    case DISPLAY_MESSAGE_BOARD_SUCCESS:
      return {
        ...state,
        getMessages: action.payload.messages,
        getMessagesLoading: false
      };
      case DELETE_MESSAGE:
      return {
        ...state,
        getMessagesLoading: false,
        getMessagesError: null
      }
      case DELETE_MESSAGE_SUCCESS:
      const messageIdToDelete = action.payload.id;
      const callback = message => message.id !== messageIdToDelete;
      return {
        ...state,
        getMessagesLoading: true,
        getMessages: state.getMessages.filter(
          callback
        ),
        getUserMessages: state.getUserMessages.filter(
          callback
        )
      }
      case DELETE_MESSAGE_FAIL:
        return{
          ...state,
          deleteMessageLoading: false,
          deleteMessageError: action.payload
        }
    default:
      return state;
  }
};
