import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPLOAD_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAIL
} from "../actions";

const initialState = {
  getUserError: null,
  user: null,
  getUserLoading: false,
  uploadPictureLoading: false,
  uploadPictureError: null
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
    case UPLOAD_PICTURE:
      return {
        ...state,
        uploadPictureLoading: true,
        uploadPictureError: null
      };
    case UPLOAD_PICTURE_SUCCESS:
      return {
        ...state,
        uploadPictureLoading: false
      };
    case UPLOAD_PICTURE_FAIL:
      return {
        ...state,
        uploadPictureError: action.payload,
        uploadPictureLoading: false
      };
    default:
      return state;
  }
};
