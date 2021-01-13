import React, { useState } from "react";
import "./Auth.css";
import RegisterImage from "../../../src/assets/images/Register.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { register } from "../../store/actions/authActions";
// import API from "../../services/api";
function Register(props) {
  let dispatch = useDispatch();
  let [registercreds, setRegistercreds] = useState({
    email: "",
    password: "",
    gender: "male",
    firstName: "",
    lastName: "",
  });
  let { email, password, gender, firstName, lastName } = registercreds;
  let submitForm = async (e) => {
    e.preventDefault();
    // let config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // await axios.post(`http://localhost:5000/register`, registercreds, config);
    // // await API.post(`/register`, registercreds);
    dispatch(register(registercreds));
    setRegistercreds({
      email: "",
      password: "",
      gender: "male",
      firstName: "",
      lastName: "",
    });
    props.history.push("/");
  };
  let changeValue = (e) => {
    e.preventDefault();
    setRegistercreds({
      ...registercreds,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={RegisterImage} alt="Register" />
          </div>
          <div id="form-section">
            <h2>Create Account</h2>
            <form onSubmit={submitForm}>
              <div>
                <input
                  className="input-field mb-1"
                  placeholder="FirstName"
                  type="text"
                  value={firstName}
                  name="firstName"
                  onChange={changeValue}
                />
              </div>
              <div>
                <input
                  className="input-field mb-1"
                  placeholder="LastName"
                  type="text"
                  value={lastName}
                  name="lastName"
                  onChange={changeValue}
                />
              </div>

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
                  className="input-field mb-1"
                  placeholder="Password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={changeValue}
                />
              </div>
              <div>
                <select
                  className="input-field mb-2"
                  name="gender"
                  onChange={changeValue}
                >
                  <option value="male" selected={gender == "male"}>
                    Male
                  </option>
                  <option value="female" selected={gender == "female"}>
                    Female
                  </option>
                </select>
              </div>

              <button type="submit">REGISTER</button>
            </form>
            <p style={{ textAlign: "center" }}>
              Already have an account ? <Link to="/login">Login</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
