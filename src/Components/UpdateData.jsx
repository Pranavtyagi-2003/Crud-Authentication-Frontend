import React, { useEffect, useState } from "react";
import "./login.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Loginform = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    console.log(data);
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/api/updateData/${_id}`, data)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const getSingleData = async () => {
      try {
        await axios
          .get(`http://localhost:5000/api/singleData/${_id}`)
          .then((res) => {
            setData(res.data.user);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getSingleData();
  }, []);

  return (
    <div className="register">
      <div className="register-container">
        <div className="app-name-logo">
          <h1>Update Member Data</h1>
        </div>
        <div className="input-box">
          <form onSubmit={submitHandler}>
            <TextField
              name="name"
              type="text"
              className="name"
              id="name"
              value={data.name}
              variant="standard"
              onChange={changeHandler}
            />

            <TextField
              name="email"
              type="email"
              className="name"
              id="email"
              value={data.email}
              variant="standard"
              onChange={changeHandler}
            />

            <TextField
              name="phone"
              type="text"
              className="name"
              id="phone"
              value={data.phone}
              variant="standard"
              onChange={changeHandler}
            />

            <TextField
              name="address"
              type="text"
              className="name"
              id="text"
              value={data.address}
              variant="standard"
              onChange={changeHandler}
            />

            <Button
              className="reg-btn"
              id="sendsignup"
              name="sendsignup"
              type="submit"
              variant="contained"
            >
              Update
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
