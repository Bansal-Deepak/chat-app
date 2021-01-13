import { LOGIN, REGISTER, ERROR } from "../actions/types";
let initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  error: null,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case REGISTER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case ERROR:
      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
        error: action.paylod,
      };
    default:
      return state;
  }
};
export default authReducer;
