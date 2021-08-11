import React from 'react';

const Register = (props) => {
    return (
        <div className="base-container">
            <div className="Register"></div>
            <div className="content">
              
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="badgeNumber">Badge Number</label>
                        <input type="text" name="badgeNumber" placeholder="Badge Number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Register
                </button>
            </div>
        </div>
    )
}

export default Register;