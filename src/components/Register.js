import React from 'react';

class Register extends React.Component {
    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header"> 
                    <h1>Register Componnet</h1>
                </div>   
                <div className="body">
                    <form >
                    <input type="text" name="firstname" placeholder="firstname"></input>
                    <input type="text" name="lastname" placeholder="lastname"></input>
                    <input type="text" name="username" placeholder="username"></input>
                    <input type="text" name="password" placeholder="password"></input>
                    <input type="text" name="mobileno" placeholder="mobileno"></input>
                    <button>Register</button>
                    </form>  
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Mohit Yadav</span></div>      
            </div>
        )
    }
}

export default Register;