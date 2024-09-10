
import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/user/forgotpassword', { email });

      if (response.data.success) {
        setMessage('If an account with that email exists, a password reset link has been sent to the email.');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className='forgot-popup'>
      <form onSubmit={onSubmitHandler} className='forgot-popup-container'>
        <div className='forgot-popup-title'>
          <h2>Forgot Your Password?</h2>
          <Link to='/'>
            <img src={assets.cross_icon} alt='Close' />
          </Link>
        </div>
        <div className='forgot-popup-inputs'>
          <input
            name='email'
            onChange={onChangeHandler}
            value={email}
            type='email'
            placeholder='Your email'
            required
          />
        </div>
        <button type='submit'>Submit</button>
        {message && <p className='message'>{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
