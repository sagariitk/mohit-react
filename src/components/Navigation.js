import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends React.Component {

    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header"></div>   
                <div className="body">
                    <NavLink to="/"><strong style={{ fontSize: 20, padding:5 }}>Home</strong></NavLink>
                    <NavLink to="/Profile" ><strong style={{ fontSize: 20, padding:5 }}>Profile</strong></NavLink>
                    <NavLink to="/Login"><strong style={{ fontSize: 20, padding:5 }}>Login</strong></NavLink>
                    <NavLink to="/Tests"><strong style={{ fontSize: 20, padding:5 }}>Tests</strong></NavLink>
                </div>
            </div>
        );
    }
}