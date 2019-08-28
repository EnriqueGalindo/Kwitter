import {
  DISPLAY_MESSAGE_BOARD,
  DISPLAY_MESSAGE_BOARD_FAIL,
  DISPLAY_MESSAGE_BOARD_SUCCESS
} from "../actions";

const initialState = {
  getMessagesLoading: false,
  getMessages: [],
  getMessagesError: null
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
      

    default:
      return state;
  }
};
