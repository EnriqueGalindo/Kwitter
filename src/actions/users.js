import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action type constants
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

const url = domain + "/users";

// action creator functions
export const getUser = username => dispatch => {
  dispatch({
    type: GET_USER
  });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({ type: GET_USER_SUCCESS, payload: result });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GET_USER_FAIL, payload: err }));
    });
};

export const getLoggedInUser = () => (dispatch, getState) => {
  const username = getState().auth.login.username;
  return dispatch(getUser(username));
};

export const getLoggedInUserProfileInfo = () => dispatch => {
  return dispatch(getLoggedInUser());
};

export const EXPAND_IMAGE = "EXPAND_IMAGE";
export const EXPAND_IMAGE_SUCCESS = "EXPAND_IMAGE_SUCCESS";
export const EXPAND_IMAGE_FAIL = "EXPAND_IMAGE_FAIL";

export const expandImage = username => dispatch => {
  dispatch({
    type: EXPAND_IMAGE
  });

  return fetch(url + "/" + username + "/picture", {
    method: "GET",
    headers: { "Content-Type": "multipart/form-data" }
  })
    .then(result => {
      console.log(result);
      return dispatch({ type: EXPAND_IMAGE_SUCCESS, payload: result });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: EXPAND_IMAGE_FAIL, payload: err })
      );
    });
};

export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";
export const EDIT_USER = "EDIT_USER";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";
// ookay so after these export EDIT_USER stuff?

//Yes.  Since this is an entirely different request to our api.  We need to define separate action cases which are then export to our reducers and finally handed off to our components to be rendered.
//okY gotcha

//You're on the right track, you're just skipping a couple steps
//thank you
//If you have any trouble, let me know.  I have to go look at Jake's code now lol
// lol same group
//NIIIIIICE.  Hopefully I won't break anything.
//And then this helps define our later dispatch
export const registerUser = registerData => dispatch => {
  dispatch({
    type: REGISTER_USER
  });
  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({ type: REGISTER_USER_SUCCESS, payload: result });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: REGISTER_USER_FAIL, payload: err })
      );
    });
//edit profile
}; 

export const editProfileUser = editData => dispatch => {
  dispatch({
    type: EDIT_USER
  });
  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(editData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({ type: EDIT_USER_SUCCESS, payload: result });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: EDIT_USER_FAIL, payload: err })
      );
      })
    };

export const registerThenGoToHomepage = registerData => dispatch => {
  return dispatch(registerUser(registerData)).then(() => dispatch(push("/")));
};

export const UPLOAD_USER_PICTURE = "UPLOAD_USER_PICTURE";
export const UPLOAD_USER_PICTURE_SUCCESS = "UPLOAD_USER_PICTURE_SUCCESS";
export const UPLOAD_USER_PICTURE_FAIL = "UPLOAD_USER_PICTURE_FAIL";

export const uploadUserPicture = formData => (dispatch, getState) => {
  dispatch({
    type: UPLOAD_USER_PICTURE
  });

  const { username, token } = getState().auth.login;

  return fetch(url + "/" + username + "/picture", {
    method: "PUT",
    headers: { Authorization: "Bearer " + token },
    body: formData
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({ type: UPLOAD_USER_PICTURE_SUCCESS, payload: result });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: UPLOAD_USER_PICTURE_FAIL, payload: err })
      );
    });
};

export const uploadUserPictureThenGetLoggedInUser = formData => dispatch => {
  return dispatch(uploadUserPicture(formData)).then(() =>
    dispatch(getLoggedInUser())
  );
};

export const GET_USERNAME = "GET_USERNAME";
export const GET_USERNAME_SUCCESS = "GET_USERNAME_SUCCESS";
export const GET_USERNAME_FAIL = "GET_USERNAME_FAIL";

export const getUsername = () => dispatch => {
  const url = domain + "/users";
  dispatch({
    type: GET_USERNAME
  });
  return fetch(url, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_USERNAME_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: GET_USERNAME_FAIL,
          payload: err
        })
      );
    });
};

export const viewImage = function() {
  return function(dispatch) {
    dispatch(push("/profile/pic"));
  };
};

export const DELETE_USER = "DELETE_USER"
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS"
export const DELETE_USER_FAIL = "DELETE_USER_FAIL"

export const deleteUser = () => (dispatch, getState) => {
  dispatch({
    type: DELETE_USER
  })

  const { username, token } = getState().auth.login;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETE_USER_SUCCESS,
        payload: result
      })
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: DELETE_USER_FAIL,
          payload: err
        })
      )
    })
}