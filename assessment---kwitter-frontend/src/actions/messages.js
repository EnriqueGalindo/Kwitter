import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action types
export const DISPLAY_MESSAGE_BOARD = "DISPLAY_MESSAGE_BOARD";
export const DISPLAY_MESSAGE_BOARD_SUCCESS = "DISPLAY_MESSAGE_BOARD_SUCCESS";
export const DISPLAY_MESSAGE_BOARD_FAIL = "DISPLAY_MESSAGE_BOARD_FAIL";

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
