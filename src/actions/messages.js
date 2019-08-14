import { handleJsonResponse, domain } from "./constants";

const url = domain + "/messages";

export const GET_MESSAGES = "GET_MESSAGES";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAIL = "GET_MESSAGES_FAIL";
export const GET_USER_MESSAGES = "GET_USER_MESSAGES";
export const GET_USER_MESSAGES_SUCCESS = "GET_USER_MESSAGES_SUCCESS";
export const GET_USER_MESSAGES_FAIL = "GET_USER_MESSAGES_FAIL";

export const getMessages = (limit = 100, offset = 0, username) => dispatch => {
  dispatch({ type: GET_USER_MESSAGES });

  fetch(
    url +
      `?limit=${limit}&offset=${offset}` +
      (username ? `&username=${username}` : "")
  )
    .then(handleJsonResponse)
    .then(result => {
      dispatch({
        type: username ? GET_USER_MESSAGES_SUCCESS : GET_MESSAGES_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: username ? GET_USER_MESSAGES_FAIL : GET_MESSAGES_FAIL,
          payload: err
        })
      );
    });
};

export const getLoggedInUserMessages = () => (dispatch, getState) => {
  const username = getState().auth.login.username;
  dispatch(getMessages(10000, 0, username));
};

export const UPDATE_MESSAGE_BY_ID = "UPDATE_MESSAGE_BY_ID";
export const UPDATE_MESSAGE_BY_ID_SUCCESS = "UPDATE_MESSAGE_BY_ID_SUCCESS";
export const UPDATE_MESSAGE_BY_ID_FAIL = "UPDATE_MESSAGE_BY_ID_FAIL";

export const updateMessageById = messageId => dispatch => {
  dispatch({ type: UPDATE_MESSAGE_BY_ID });

  return fetch(url + `/${messageId}`)
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_MESSAGE_BY_ID_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UPDATE_MESSAGE_BY_ID_FAIL, payload: err })
      );
    });
};
