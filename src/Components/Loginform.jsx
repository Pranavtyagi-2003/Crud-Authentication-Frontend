import React from "react";
import "./login.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Loginform = () => {
  return (
    <div className="register">
      <div className="register-container">
        <div className="app-name-logo">
          <h1>Fitness Club Registration</h1>
        </div>
        <div className="input-box">
          <form>
            <TextField
              name="name"
              type="text"
              className="name"
              id="name"
              label="Name"
              variant="standard"
            />

            <TextField
              name="email"
              type="email"
              className="name"
              id="email"
              label="Email"
              variant="standard"
            />

            <TextField
              name="phone"
              type="tel"
              className="name"
              id="phone"
              label="Phone"
              variant="standard"
            />

            <TextField
              name="address"
              type="text"
              className="name"
              id="text"
              label="Address"
              variant="standard"
            />

            <Button
              className="reg-btn"
              id="sendsignup"
              name="sendsignup"
              type="submit"
              variant="contained"
            >
              Add Member
            </Button>
          </form>
        </div>
        <Link to="/viewmember">
          <Button
            className="reg-btn"
            id="sendsignup"
            name="sendsignup"
            type="submit"
            variant="contained"
          >
            View Member List
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Loginform;
