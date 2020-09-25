import {
  LOADING,
  LOGIN_SUCCESS,

  LOGOUT
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
    default:
      return state
  }
}

export default authenticationReducer;
