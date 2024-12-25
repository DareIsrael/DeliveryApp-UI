import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "./ConfirmAccount.css"


const ConfirmAccount = () => {
  const { token } = useParams(); // Get the token from the URL
  const [confirmationStatus, setConfirmationStatus] = useState('Loading...');

  useEffect(() => {
    if (!token) {
      setConfirmationStatus('Token is missing.');
      return;
    }

    const confirmAccount = async () => {
      try {
        console.log('Token from URL:', token); // Debugging line to check token
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASEURL}/api/user/confirm/${token}`);
        if (response.data.success) {
          setConfirmationStatus('Your account has been successfully confirmed! pls SignIn');
        } else {
          setConfirmationStatus(response.data.message || 'Account confirmation failed.');
        }
      } catch (error) {
        setConfirmationStatus('An error occurred. Please try again.');
      }
    };

    confirmAccount();
  }, [token]);

  return (
    <div className='confirmation-container'>
      <h2>Account Confirmation</h2>
      <p>{confirmationStatus}</p>
      <Link to='/' className='confirmHome' > <button >Home ►</button> </Link>
    </div>
  );
};

export default ConfirmAccount;
