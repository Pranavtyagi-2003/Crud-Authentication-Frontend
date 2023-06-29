import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({});

  const changeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        login
      );
      if (response.data.message) {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        navigate("/");
        return
      }
    } catch (error) {
        alert(error.response.data.message)
    }
  };

  return (
    <div className="reg-container">
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "3rem",
        }}
      >
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label for="lastname">Email</label>
            <input
              onChange={changeHandler}
              type="email"
              className="form-control"
              id="exampleInputlastname"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label for="Password">Password</label>
            <input
              onChange={changeHandler}
              type="password"
              className="form-control"
              id="exampleInputphoneno"
              name="password"
              required
            />
          </div>

          <button
            style={{ marginTop: "1rem" }}
            type="submit"
            className="btn btn-primary"
            name="create"
          >
            Login
          </button>
          <p style={{ marginTop: "1rem" }}>
            Don’t have an account? <Link to="/register">Sign up</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
