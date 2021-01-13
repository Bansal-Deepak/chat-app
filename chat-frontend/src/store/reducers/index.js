import { combineReducers } from "redux";
import authReducer from "./authReducer";
export default combineReducers({
  // auth: authReducer,
  authReducer,
});

// this is root-reducer.there can be many reducers,but only one reducer
//you can choose not to provide the new name and just provide authReducer
