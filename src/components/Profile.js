import React from 'react';
import { NavLink } from 'react-router-dom';

class Profile extends React.Component {
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <NavLink to="/Dashboard" ><strong style={{ fontSize: 20, padding:5 }}>Dashboard</strong></NavLink>
                <NavLink to="/Profile" ><strong style={{ fontSize: 20, padding:5 }}>Profile</strong></NavLink>
                <NavLink to="/Tests" ><strong style={{ fontSize: 20, padding:5 }}>Tests</strong></NavLink>

                <div className="header">
                    <h1>Profile Componnet</h1>
                </div>   
                <div className="body">
                    <div >
                        <p >First Name : </p>
                        <p >Last Name: </p>
                        <p >User Name: </p>
                        <p >Mobile No: </p>
                    </div> <br/>
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Mohit Yadav</span></div>      
            </div>
        )
    }
}

export default Profile;