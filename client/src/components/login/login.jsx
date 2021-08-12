import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Cookies from "js-cookie";
import "./style.scss";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/login", { email, password })
      .then((res) => {
        //console.log('userId' , res.data.user._id)
        Cookies.set("userId", res.data.user._id);
        Cookies.set("username", res.data.user.name);
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <div className="base-container">
      <div className="Login">
        <h1>Login</h1>
      </div>
      <div className="content">
        <form className="form" onSubmit={loginUser}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
