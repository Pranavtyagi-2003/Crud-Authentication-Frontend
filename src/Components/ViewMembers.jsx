import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import './ViewMember.css'

function ViewMembers() {
    const admindata = [
        {
            name : "Surendra Kumar",
            email : "surendra123@gmail.com",
            phone:"9087678967",
            address:"123 Abc",
        },
        {
            name : "Pranav Tyagi",
            email : "pranav123@gmail.com",
            phone:"7658474637",
            address:"5656 Ghgh",
        }
    ]
  return (
        <div>
            <p className='Re-Meeting'>Member List</p>
            <div className="table">
                <div className="upper">
                    <ul>
                        <li>Name</li>
                        <li>Email</li>
                        <li>Phone</li>
                        <li>Address</li>
                    </ul>
                </div>
                {
                    admindata.map((items) => {
                        const { name,email,phone,address} = items;
                        return (
                            <div className="lower">
                                <ul>
                                    <li>{name}</li>
                                    <li>{email}</li>
                                    <li>{phone}</li>
                                    <li>{address}</li>
                                </ul>
                            </div>
                        )
                    })
                }
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
};

export default ViewMembers;