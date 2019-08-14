import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LOGIN_GOOGLE = "LOGIN_GOOGLE";
export const LOGIN_GOOGLE_SUCCESS = "LOGIN_GOOGLE_SUCCESS";
export const LOGIN_GOOGLE_FAIL = "LOGIN_GOOGLE_FAIL";

const url = domain + "/auth";

// action creators
const login = loginData => dispatch => {
  dispatch({
    type: LOGIN
  });

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGIN_FAIL, payload: err.message })
      );
    });
};

export const loginGoogle = () => dispatch => {
  dispatch({
    type: LOGIN_GOOGLE
  });

  return new Promise((resolve, reject) => {
    // Open a new window
    const win = window.open(
      url + "/google/login",
      "Google Auth",
      "height=600,width=450"
    );
    if (win) win.focus();
    window.addEventListener(
      "message",
      function googleLoginCallback(event) {
        // IMPORTANT: Check the origin of the data!
        if (~event.origin.indexOf("https://kwitter-api.herokuapp.com")) {
          // The data has been sent from your site

          // The data sent with postMessage is stored in event.data
          console.log(event.data);
          win.close();
          window.removeEventListener("message", googleLoginCallback);
          resolve(
            dispatch({
              type: LOGIN_GOOGLE_SUCCESS,
              payload: event.data
            })
          );
        } else {
          console.log("bad message!");
          console.log(event);
          //reject(dispatch({ type: LOGIN_GOOGLE_FAIL }));
          // The data hasn't been sent from your site!
          // Be careful! Do not use it.
          return;
        }
      },
      false
    );
  });
};

export const loginGoogleThenGoToUserProfile = () => dispatch => {
  return dispatch(loginGoogle()).then(() => dispatch(push("/profile")));
};

export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/profile")));
};

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

const logout = () => (dispatch, getState) => {
  dispatch({
    type: LOGOUT
  });

  const token = getState().auth.login.token;

  return fetch(url + "/logout", {
    method: "GET",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGOUT_FAIL, payload: err.message })
      );
    });
};

export const logoutThenGoToHomepage = () => dispatch => {
  return dispatch(logout()).then(() => dispatch(push("/")));
};
