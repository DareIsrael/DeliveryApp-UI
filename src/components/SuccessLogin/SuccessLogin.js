import React from 'react';
import './SuccessLogin.css';

const SuccessLogin = () => {
    return (
        <div className="success-container">
            <div className="success-box">
                <div className="success-icon">✔️</div>
                <h1>Login Successful!</h1>
                <p>Welcome! You're now logged in.</p>
               
            </div>
        </div>
    );
};

export default SuccessLogin;
