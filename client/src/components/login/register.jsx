import React from 'react';
import loginImg from '../../axsos-logo.png';

const Register = (props) => {
    return (
        <div className="base-container">
            <div className="Register"></div>
            <div className="content">
                <div className="image">
                    <img src={loginImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="badgeNumber">Badge Number</label>
                        <input type="text" name="badgeNumber" placeholder="Badge Number"/>
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

export default login;