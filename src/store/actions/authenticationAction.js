import {
  LOGIN_SUCCESS,
  AUTH_ERROR,
  REMOVE_AUTH_ERROR,
  DRIVER_BY_USER, LOADING
} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";
import React from "react";
import {useHistory} from 'react-router-dom';
// let history = useHistory();

export const LogIn = (username, password) => async dispatch => {
  dispatch(isLoading())
  const body = {username, password};
  try {
    const res = await axios.post(`${api.login}/api/login/`, body);
    const  res2 = await axios.get(`${api.driver}/api/email/?email=${username}`)
    const token  = res.data.Authorized;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("id", res2.data.id);
    // dispatch(go())
    dispatch({
      type: LOGIN_SUCCESS,
      payload: token
    });
    dispatch({
      type: DRIVER_BY_USER,
      payload: res2.data
    })
    // history.push('/profile')
    window.location.href = "/profile";
    // dispatch(autoLogin())

  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response
    });

      setTimeout(() => dispatch({
        type: REMOVE_AUTH_ERROR
      }), 3000)
  }
};


export function isLoading() {
  return {
    type: LOADING,
  };
}

