import React from "react";

import LoginImage from "../../../src/assets/images/Login.svg";
import "./Auth.css";
let Login = () => {
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={LoginImage} alt="Login" />
          </div>
          <div id="form-section">
            <h2>Welcome Back</h2>
            <form>
              <div>
                <input className="input-field mb-1" placeholder="Email" />
              </div>
              <div>
                <input className="input-field mb-2" placeholder="Password" />
              </div>
              <button type="submit">LOGIN</button>
            </form>
            <p style={{ textAlign: "center" }}>
              Dont have an account ? Register{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
