import {
  LOADING_DRIVER,
  DRIVER_ERROR,
  CREATE_DRIVER,
  REMOVE_DRIVER_ERROR,
  UPDATE_DRIVER, DRIVER_BY_USER,

} from "../actionTypes"
import  axios from 'axios'
import api from "../../environments/environment";




const token = sessionStorage.getItem('token');


export const createDriver = (firstName, lastName, email, phoneNo, residentialAddress, status, pin, licenseNo, nin, lasdriId) => async dispatch => {
  const body = {firstName, lastName, email, phoneNo, residentialAddress, status, pin, licenseNo, nin, lasdriId};
  try {
    const res = await axios.post(`${api.driver}/api/me/drivers/`, body);
    dispatch({
      type: CREATE_DRIVER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: err.response.data.result
    });
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ERROR
    }), 5000)

  }
};

export const updateDriver = (id, firstName, lastName, email, phoneNo, residentialAddress, status, pin, licenseNo, nin, lasdriId, dateOfBirth, stateOfOrigin, bloodGroup) => async dispatch => {
  const body = {firstName, lastName, email, phoneNo, residentialAddress, status, pin, licenseNo, nin, lasdriId, dateOfBirth, stateOfOrigin, bloodGroup};
  dispatch(isLoading())
  try {
    const res = await axios.put(`${api.driver}/api/drivers/${id}/`, body, {
      headers: {
        Authorization: token
      }
    });
    dispatch({
      type: UPDATE_DRIVER,
      payload: res.data
    });
    window.location.href = "/profile";
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ERROR
    }), 5000)

  }
};

export const getDriver = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driver}/api/drivers/${id}/`);
    dispatch({
      type: DRIVER_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Driver not Available"
    });
  }
};



export function isLoading() {
  return {
    type: LOADING_DRIVER,
  };
}



