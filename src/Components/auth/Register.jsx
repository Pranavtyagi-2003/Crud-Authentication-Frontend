import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({});

  const changeHandler = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
      .post("http://localhost:5000/api/register", register)
      if(response.data.message){
        alert(response.data.message)
      }
      navigate('/login')
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
        <h2>Sign up</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label for="firstname">Name</label>
            <input
              onChange={changeHandler}
              type="text"
              className="form-control"
              id="exampleInputfirstname"
              name="name"
              required
            />
          </div>
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

          <div className="form-group">
            <label for="Confirm Password">Confirm Password</label>
            <input
              onChange={changeHandler}
              type="password"
              className="form-control"
              id="exampleInputPassword"
              name="cPassword"
              required
            />
          </div>
          <button
            style={{ marginTop: "1rem" }}
            type="submit"
            className="btn btn-primary"
            name="create"
          >
            Sign up
          </button>
          <p style={{ marginTop: "1rem" }}>
            Already have an account <Link to="/login">Sign in</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
