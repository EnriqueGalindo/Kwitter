import { domain, jsonHeaders, handleJsonResponse } from "./constants";

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
  return dispatch(getLoggedInUser())
};

//Notice how these are defining our action cases
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

//This is where you guys have utilized that dispatch
export const registerThenGoToProfile = registerData => dispatch => {
  return dispatch(registerUser(registerData)).then(() =>
    dispatch(
      getLoggedInUser({
        username: registerData.username,
        password: registerData.password
      })
    )
  );
};


//Well, you're basically telling it to dispatch something here that's not defined.  If you look at some of the other dispatch requests on these actions you can trace them back to their instantiation. But right now, it doesn't look like you have separate actions for the edit profile (which I believe is a PUT request?).

