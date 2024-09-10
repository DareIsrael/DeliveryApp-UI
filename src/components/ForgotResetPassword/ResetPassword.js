

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForgotPassword.css'; // Ensure this path is correct
import { useParams, useNavigate, Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const ResetPassword = ({ setShowResetPassword, setShowLogin }) => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  // Function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== passwordConfirm) {
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4000/api/user/resetpassword/${id}/${token}`, { password });

      if (response.data.success) {
        setMessage('Password has been reset successfully.');
        setSuccess(true); // Set success flag to true
        setShowLogin(true); // Show the login form (if applicable)
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
    }
  };

  // Redirect to home page after success
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate('/'); // Redirect to the home page
      }, 3000); // Delay of 3 seconds

      return () => clearTimeout(timer); // Clear timeout when component unmounts
    }
  }, [success, navigate]);

  return (
    <div className='forgot-popup'>
      <form onSubmit={handleSubmit} className='forgot-popup-container'>
        <div className='forgot-popup-title'>
          <h2>Reset Your Password</h2>
          <Link to='/'>
            <img src={assets.cross_icon} alt='Close' />
          </Link>
        </div>
        <div className='forgot-popup-inputs'>
          <input
            type='password'
            placeholder='New Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Confirm New Password'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Reset Password</button>
        {message && <p className='message'>{message}</p>} {/* Display the message */}

        <Link to='/'>
        <p onClick={()=> setShowLogin(true)}  >Kindly <span className='login_span'>Login</span> after clicking the reset password button</p>
        </Link>
       
      </form>
    </div>
  );
};

export default ResetPassword;
