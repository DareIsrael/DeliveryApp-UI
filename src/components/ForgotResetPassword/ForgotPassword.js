import React, { useState, useContext } from 'react';
import axios from 'axios';
import './ForgotPassword.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // State for loading spinner
  const { url } = useContext(StoreContext);

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    try {
      const response = await axios.post(`${url}/api/user/forgotpassword`, { email });

      if (response.data.success) {
        setMessage("A password reset link has been sent to your email. If you cannot find it in your inbox, please check your spam or junk folder.");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false); // Stop loading spinner
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
        <button type='submit' disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {loading && <div className='spinner'></div>}
        {message && <p className='message'>{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
