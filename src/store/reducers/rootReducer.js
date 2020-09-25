import { combineReducers } from "redux";
import driverReducer from "./driverReducer";
import authenticationReducer from "./authenticationReducer";



export default combineReducers({
  driver: driverReducer,
  auth: authenticationReducer,
});
