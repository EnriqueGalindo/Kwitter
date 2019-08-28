import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action types
export const DISPLAY_MESSAGE_BOARD = "DISPLAY_MESSAGE_BOARD";
export const DISPLAY_MESSAGE_BOARD_SUCCESS = "DISPLAY_MESSAGE_BOARD_SUCCESS";
export const DISPLAY_MESSAGE_BOARD_FAIL = "DISPLAY_MESSAGE_BOARD_FAIL";
export const POST_MESSAGE = "POST_MESSAGE"
export const POST_MESSAGE_FAIL = "POST_MESSAGE_FAIL"
export const POST_MESSAGE_SUCCESS = "POST_MESSAGE_SUCCESS"

const url = domain + "/messages";

// action creators
export const getMessages = () => dispatch => {
  dispatch({
    type: DISPLAY_MESSAGE_BOARD
  });

  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DISPLAY_MESSAGE_BOARD_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: DISPLAY_MESSAGE_BOARD_FAIL,
          payload: err
        })
      );
    });
};
export const postMessage = (message) => (dispatch, getState) => {
  dispatch({
    type: POST_MESSAGE
  });
const token = getState ().auth.login.token
  return fetch(url, {
    method: "POST",
    headers:  {Authorization: "Bearer " + token, ...jsonHeaders},
    body: JSON.stringify({ text: message }) 
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POST_MESSAGE_SUCCESS,
        payload: result,
        body: window.location.reload(true)
      });
    })
    
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: POST_MESSAGE_FAIL,
          payload: err
        })
      );
    });
};