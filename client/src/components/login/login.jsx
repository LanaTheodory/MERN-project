import React from 'react';
import './style.scss';
const Login = (props) => {
    return (
        <div className="base-container">
            <div className="Login"><h1>Login</h1></div>
            <div className="content">
             
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login;