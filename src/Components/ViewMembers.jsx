import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ViewMember.css";
import { useState } from "react";
import axios from "axios";

function ViewMembers() {
  const [user, setUser] = useState([]);

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5000/api/delete/${id}`).then((res) => {
      alert(res.data.message);
      getData();
    });
  };

  const getData = async () => {
    await axios
      .get("http://localhost:5000/api/getuser")
      .then((res) => {
        setUser(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p className="Re-Meeting">Members List</p>
      <div className="table">
        <div className="upper">
          <ul>
            <li>Name</li>
            <li>Email</li>
            <li>Phone Number</li>
            <li>Address</li>
            <li>Delete</li>
            <li>Update</li>
          </ul>
        </div>
        {user.map((items, index) => {
          const { name, email, phone, address, _id } = items;
          return (
            <div className="lower">
              <ul key={index}>
                <li>{name}</li>
                <li>{email}</li>
                <li>{phone}</li>
                <li>{address}</li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteData(_id)}
                >
                  Delete
                </li>
                <Link style={{marginTop:".9rem"}} to={`/updatedata/${_id}`}>Update</Link>
              </ul>
            </div>
          );
        })}
      </div>
      <Link to="/">
        <Button
          className="reg-btn"
          id="sendsignup"
          name="sendsignup"
          type="submit"
          variant="contained"
        >
          Register Form
        </Button>
      </Link>
    </div>
  );
}

export default ViewMembers;
