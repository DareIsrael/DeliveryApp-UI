
import React, { useContext, useState } from 'react';
import './LoginPopUp.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [error, setError] = useState();
  const [currState, setCurrState] = useState('Login');
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: ""
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle for confirm password

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () => setShowPassword(prev => !prev); // Toggle password field visibility
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev); // Toggle confirm password visibility

  const onLogin = async (event) => {
    event.preventDefault();

    if (currState !== "Login" && data.password !== data.passwordConfirm) {
      setError("Passwords do not match!");
      return;
    }

    let endpoint = currState === "Login" ? "/api/user/login" : "/api/user/register";
    let apiUrl = `${url}${endpoint}`;

    try {
      const response = await axios.post(apiUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        setError(response.data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className='login-popup-inputs'>
          {currState === "Login" ? null : (
            <>
              <input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Your name' required />
              <input name='phoneNumber' onChange={onChangeHandler} value={data.phoneNumber} type='text' placeholder='Phone Number' required />
            </>
          )}
          <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Your email' required />
          
          {/* Password input with eye icon */}
          <div className="password-input-wrapper">
            <input 
              name='password' 
              onChange={onChangeHandler} 
              value={data.password} 
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              placeholder='Password' 
              required 
            />
            <span onClick={togglePasswordVisibility} className="eye-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {currState === "Login" ? null : (
            <div className="password-input-wrapper">
              <input 
                name='passwordConfirm' 
                onChange={onChangeHandler} 
                value={data.passwordConfirm} 
                type={showConfirmPassword ? 'text' : 'password'} // Toggle confirm password visibility
                placeholder='Confirm Password' 
                required 
              />
              <span onClick={toggleConfirmPasswordVisibility} className="eye-icon">
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}
        </div>
        
        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        
        {currState === "Login" ? (
          <Link to="/forgotpassword"><p onClick={() => setShowLogin(false)}>Forgot Password</p></Link>
        ) : (
          <div className='login-popup-condition'>
            <input type='checkbox' required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        )}
        
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
        
        <div>{error && <p className="error-message">{error}</p>}</div>
      </form>
    </div>
  );
};

export default LoginPopUp;
