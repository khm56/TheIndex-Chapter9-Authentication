import axios from "axios";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./actionTypes";

const setAuthToken = token => {
  console.log(token);
  localStorage.setItem("token", token);
  axios.defaults.headers.common.Authorization = `jwt ${token}`;
};

export const checkForExpiredToken = () => {
  return dispatch => {
    // Get token
    const token = localStorage.token;

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        setAuthToken(token);
        // Set user
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = (userData, history) => {
  return dispatch => {
    axios
      .post("https://the-index-api.herokuapp.com/login/", userData)
      .then(res => res.data)
      .then(user => {
        const decodedUser = jwt_decode(user.token);
        setAuthToken(user.token);
        dispatch(setCurrentUser(decodedUser));
        history.push("/");
      })
      .catch(err => console.error(err.response));
  };
};

export const signup = (userData, history) => {
  return dispatch => {
    axios
      .post("https://the-index-api.herokuapp.com/signup/", userData)
      .then(res => res.data)
      .then(user => {
        const decodedUser = jwt_decode(user.token);
        setAuthToken(user.token);
        dispatch(setCurrentUser(decodedUser));
        history.push("/");
      })
      .catch(err => console.error(err.response));
  };
};

export const logout = () => setCurrentUser();

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
