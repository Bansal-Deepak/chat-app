import React, { useState } from "react";

import LoginImage from "../../../src/assets/images/Login.svg";
import "./Auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import API from "../../services/api";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authActions";
import { useSelector } from "react-redux";
let Login = (props) => {
  let errorValue = useSelector((state) => {
    console.log("state", state);
    return state.authReducer.error;
  });
  const dispatch = useDispatch();
  let [logincreds, setLogincreds] = useState({
    email: "",
    password: "",
  });
  let { email, password } = logincreds;
  let submitForm = async (e) => {
    e.preventDefault();
    // let config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // await axios.post(`'http://localhost:5000/login`, logincreds, config);
    // // await API.post(`/login`, logincreds);
    dispatch(login(logincreds));
    setLogincreds({
      email: "",
      password: "",
    });
    props.history.push("/");
    //this is provided by Router .Router will provide history via props to all the
    // paths inside Router.you can also do this inside authActions.js by passing
    //history as parameter
  };
  let changeValue = (e) => {
    e.preventDefault();
    setLogincreds({
      ...logincreds,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div id="auth-container">
        <div id="auth-card">
          <div className="card-shadow">
            <div id="image-section">
              <img src={LoginImage} alt="Login" />
            </div>
            <div id="form-section">
              <h2>Welcome Back</h2>
              <form onSubmit={submitForm}>
                <div>
                  <input
                    className="input-field mb-1"
                    placeholder="Email"
                    type="email"
                    value={email}
                    name="email"
                    onChange={changeValue}
                  />
                </div>
                <div>
                  <input
                    className="input-field mb-2"
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={changeValue}
                  />
                </div>
                <button type="submit">LOGIN</button>
              </form>
              <p style={{ textAlign: "center" }}>
                Dont have an account ? <Link to="/register">Register</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>{errorValue && <h2>{errorValue}</h2>}</div>
    </div>
  );
};

export default Login;
