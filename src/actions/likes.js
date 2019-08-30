import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { getMessages } from "./messages";
// action types
export const LIKE = "LIKE";
export const LIKE_SUCCESS = "LIKE_SUCCESS";
export const LIKE_FAIL = "LIKE_FAIL";
const url = domain + "/likes";
// action creators
export const likeMessage = messageId => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({
    type: LIKE,
    messageId
  });
  const likedMessage = { messageId: messageId };
  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
    body: JSON.stringify(likedMessage)
  })
    .then(handleJsonResponse)
    .then(result => {
      dispatch({
        type: LIKE_SUCCESS,
        payload: likedMessage
      });
      dispatch(getMessages());
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: LIKE_FAIL,
          payload: err
        })
      );
    });
};
export const REMOVE_LIKE = "REMOVE_LIKE";
export const REMOVE_LIKE_SUCCESS = "REMOVE_LIKE_SUCCESS";
export const REMOVE_LIKE_FAIL = "REMOVE_LIKE_FAIL";
export const removeLike = likeId => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({
    type: REMOVE_LIKE,
    
  });
  
  return fetch(url + `/${likeId}`, {
    method: "DELETE",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
   
  })
    .then(handleJsonResponse)
    .then(result => {
      dispatch({
        type: REMOVE_LIKE_SUCCESS,
        payload: result
      });
      dispatch(getMessages());
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: REMOVE_LIKE_FAIL,
          payload: err
        })
      );
    });
};