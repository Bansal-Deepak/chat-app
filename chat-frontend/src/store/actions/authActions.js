import { LOGIN, REGISTER, ERROR } from "./types";
import axios from "axios";
export const login = (logindata) => async (dispatch) => {
  try {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let result = await axios.post(
      `http://localhost:5000/login`,
      logindata,
      config
    );
    dispatch({
      type: LOGIN,
      payload: result.data,
    });
  } catch (ex) {
    dispatch({
      type: ERROR,
      payload: "Something went wrong !!",
    });
  }
};

export const register = (registerdata) => async (dispatch) => {
  try {
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let result = await axios.post(
      `'http://localhost:5000/register`,
      registerdata,
      config
    );
    dispatch({
      type: REGISTER,
      payload: result.data,
    });
  } catch (ex) {
    dispatch({
      type: ERROR,
      payload: "Something went wrong !!",
    });
  }
};
