import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Register = (props) => {
    const { onSubmitProp } = props;
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [badgeNumber, setBadgeNumber] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const thisUser = [{
            name: name,
            email: email,
            badgeNumber: badgeNumber,
            password: password,
            confirmPassword: passwordConfirmation
        }]
        axios.post('http://localhost:8000/api/register', thisUser)
            .then(res => navigate("/register"))
            .catch(err => {
                const errorRes = err.response.data.errors;
                const errorArr = [];
                for (var key of Object.keys(errorRes)) {
                    errorArr.push(errorRes[key].message)
                }
                setErrors(errorArr)
            })
    }


    return (
        <div className="base-container">
            <div className="Register">
            </div>
            <div className="content">
                {errors.map((err, idx) => <p key={idx}>{err}</p>)}
                <form className="form" >
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="badgeNumber">Badge Number</label>
                        <input type="text" name="badgeNumber" placeholder="Badge Number" onChange={(e) => setBadgeNumber(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={(e) => setPasswordConfirmation(e.target.value)} />
                    </div>
                    <div className="footer">
                        <button type="submit" onClick={createUser} className="btn">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;