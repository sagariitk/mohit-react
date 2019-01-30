import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div className="main" style= {{margin : 10}}> 
                <div className="header">
                    <h1>Login Componnet</h1>
                </div>   
                <div className="body">
                    <form >
                    <input type="text" name="username" placeholder="username"></input>
                    <input type="text" name="password" placeholder="password"></input>
                    <button>Login</button>
                    </form> 
                </div>
                <div className="footer"><span>&copy; Copyright 2019 Mohit Yadav</span></div>      
            </div>
        )
    }
}

export default Login;