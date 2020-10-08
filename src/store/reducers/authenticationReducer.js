import {
  AUTH_ERROR,
  LOADING,
  LOGIN_SUCCESS,

  LOGOUT, REMOVE_AUTH_ERROR
} from "../actionTypes";

const initialState = {
  token: null,
  isAuthenticated: null,
  isLoading: false,
  errors: null,

};

function authenticationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload,
        isAuthenticated: true,
        isLoading: false
      };
    }
    case LOGOUT: {
      return {
        isAuthenticated: false,
        isLoading: false
      };
    }
    case LOADING: {
      return {
        isLoading: true
      };
    }
    case AUTH_ERROR: {
      return {
        isLoading: false,
        errors: payload
      };
    }
    case REMOVE_AUTH_ERROR: {
      return {
        errors: null
      };
    }
    default:
      return state
  }
}

export default authenticationReducer;
