import React from 'react';
import { NavLink } from 'react-router-dom';


class Logout extends React.Component {
    
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <NavLink to="/Login"><strong style={{ fontSize: 20, padding:5 }}>Login</strong></NavLink>
                <NavLink to="/"><strong style={{ fontSize: 20, padding:5 }}>Home</strong></NavLink>

                <div className="header">
                    <h1>Logout Componnet</h1>
                </div>   
                <div className="body">
                    <button >Logout</button>
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Mohit Yadav</span></div>      
            </div>
        )
    }
}

export default Logout;