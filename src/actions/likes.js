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
