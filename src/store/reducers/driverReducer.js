import {
  DRIVER_BY_USER, LOADING_DRIVER, UPDATE_DRIVER,
} from "../actionTypes";

const initialState = {
  driver: null,
  driverId: null,
  isLoading: false
};

function driverReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DRIVER_BY_USER: {
      return {
        ...state,
        driver: payload,
        driverId: payload.id,
        isLoading: false,
      };
    }
    case UPDATE_DRIVER: {
      return {
        ...state,
        isLoading: false,
      };
    }


    case LOADING_DRIVER: {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state
  }
}

export default driverReducer;
