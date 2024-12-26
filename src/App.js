// import React, { useState } from 'react'
// import Navbar from './components/navbar/Navbar'
// import './App.css'
// import { Route, Routes, useAsyncError } from 'react-router-dom'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import Cart from './pages/Cart/Cart'
// import Home from './pages/Home/Home'
// import Footer from './components/Footer/Footer'
// import LoginPopUp from './components/LoginPopUp/LoginPopUp'
// import Verify from './pages/verify/Verify'
// import MyOrders from './pages/myOrders/MyOrders'
// import ForgotPassword from './components/ForgotResetPassword/ForgotPassword'
// import ResetPassword from './components/ForgotResetPassword/ResetPassword'
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import About from './components/about/About'
// import SuccessLogin from './components/SuccessLogin/SuccessLogin'

// const App = () => {
  
//   const [showLogin, setShowLogin] = useState(false)
//   // const [showForgotPassword, setShowForgotPassword] = useState(false);
//   const [showResetPassword, setShowResetPassword] = useState(true)
//   const [successLogin, setSuccessLogin] = useState(false)

//   return (
//      <>
//    {/* {showLogin?<LoginPopUp setShowLogin={setShowLogin} /> : <></>} */}
//    {showLogin? <LoginPopUp setShowLogin={setShowLogin} setSuccessLogin={setSuccessLogin} /> : <></>}
//    {/* {showLogin? <Cart setShowLogin={setShowLogin} /> : <></>} */}

//    {/* {showForgotPassword ? <ForgotPassword setShowForgotPassword={setShowForgotPassword} /> : <></>} */}
//    {/* {setShowResetPassword? <setShowResetPassword setShowResetPassword = {setShowResetPassword} /> : <></>} */}
//    {successLogin ? <SuccessLogin /> : <></>}

//      <div className='app'>

//      <Navbar  setShowLogin= {setShowLogin}/>
//      <Routes>
  
//    <Route path='/' element={<Home />} />
//    <Route path='/cart' element={<Cart setShowLogin={setShowLogin} />} />
//    <Route path='/order' element={<PlaceOrder />} />
//     <Route path='/verify' element={<Verify />} />
//     <Route path='/myorders' element={<MyOrders />} />
//     <Route path='/forgotpassword' element={<ForgotPassword  />} />
//     <Route path='/resetpassword/:id/:token' element={<ResetPassword setShowResetPassword= {setShowResetPassword}  setShowLogin = {setShowLogin}/>} /> 
//     <Route  path='about' element={<About />} />  
//     </Routes>

   
//    </div>
//    <Footer />
   
     
//      </>
    
   
//   )
// }

// export default App




import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/myOrders/MyOrders';
import ForgotPassword from './components/ForgotResetPassword/ForgotPassword';
import ResetPassword from './components/ForgotResetPassword/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './components/about/About';
import SuccessLogin from './components/SuccessLogin/SuccessLogin';
import ConfirmAccount from './components/ConfirmEmailLink/ConfirmAccount';
import CookieConsent from 'react-cookie-consent';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(true);
  const [successLogin, setSuccessLogin] = useState(false);

  // Add/remove the 'no-scroll' class when the popup is shown
  useEffect(() => {
    if (showLogin) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showLogin]);


  const handleDecline = () => {
    // console.log("User declined cookies");
    // Optionally, handle actions for declined cookies (like not loading analytics scripts)
    // You can also set a cookie or flag to remember the user's choice
  };

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} setSuccessLogin={setSuccessLogin} />}
      {successLogin && <SuccessLogin />}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart setShowLogin={setShowLogin} />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path="/confirm/:token" element={<ConfirmAccount />} />
          <Route path='/resetpassword/:id/:token' element={<ResetPassword setShowResetPassword={setShowResetPassword} setShowLogin={setShowLogin} />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      
      <Footer />

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="userCookieConsent"
        style={{
          background: "#333",
          color: "white",
          fontSize: "20px",
          padding: "15px",
          textAlign: "center",
        }}
        buttonStyle={{
          background: "#4e9c4e",
          color: "#fff",
          fontSize: "20px",
          padding: "10px",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
        declineButtonStyle={{
          
          background: "#e74c3c", // Red for the Decline button
          color: "#fff",
          fontSize: "20px",
          padding: "10px",
          borderRadius: "5px",
        }}
        expires={365}
        onAccept={() => {
          // console.log("User accepted cookies");
          // Load non-essential cookies, e.g., analytics
        }}
        onDecline={handleDecline}
      >
        We use cookies to enhance your experience. By continuing, you agree to our <a href="/privacy-policy" style={{ color: "#00aaff" }}>Privacy Policy</a>.
      </CookieConsent>
    </>
  );
};

export default App;
