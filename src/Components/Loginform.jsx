import React, { useState } from "react";
import "./login.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const navigate = useNavigate()

  const [data, setData] = useState({});

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }


  const submitHandler = async(e)=>{
    console.log(data)
    e.preventDefault()
    await axios.post("http://localhost:5000/api/adduser",data).then((res)=>{
      console.log(res.data);
      alert(res.data.message) 
    }).catch((err)=>{
      console.log(err);
    })
  }

  const logout = () =>{
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className="main">
       <div className="register">
      <div className="register-container">
        <div className="app-name-logo">
          <h1>Member Data</h1>
        </div>
        <div className="input-box">
          <form onSubmit={submitHandler}>
            <TextField
              name="name"
              type="text"
              className="name"
              id="name"
              label="Name"
              variant="standard"
              onChange={changeHandler}
            />

            <TextField
              name="email"
              type="email"
              className="name"
              id="email"
              label="Email"
              variant="standard"
              onChange={changeHandler}
            />

            <TextField
              name="phone"
              type="text"
              className="name"
              id="phone"
              label="Phone"
              variant="standard"
              onChange={changeHandler}
            />

            <TextField
              name="address"
              type="text"
              className="name"
              id="text"
              label="Address"
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
      <Button onClick={logout} className="logout" variant="contained">Logout</Button>
    </div>
   
  );
};

export default Loginform;
