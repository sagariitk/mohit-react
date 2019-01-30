import React from 'react';
import { NavLink } from 'react-router-dom';


export default class Index extends React.Component {

    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
            <NavLink to="/Login"><strong style={{ fontSize: 20, padding:5 }}>Login</strong></NavLink>
            <NavLink to="/Dashboard"><strong style={{ fontSize: 20, padding:5 }}>Dashboard</strong></NavLink>
            <div className="header">
                <h1>Index Component</h1>
            </div>   
            <div className="body">

            </div>
            <div className="footer"><span>&copy; Copyright 2019 Mohit Yadav</span></div>
            </div>
        );
    }
}