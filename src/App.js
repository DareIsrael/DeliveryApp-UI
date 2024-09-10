import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import { Route, Routes, useAsyncError } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import Verify from './pages/verify/Verify'
import MyOrders from './pages/myOrders/MyOrders'
import ForgotPassword from './components/ForgotResetPassword/ForgotPassword'
import ResetPassword from './components/ForgotResetPassword/ResetPassword'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './components/about/About'

const App = () => {
  
  const [showLogin, setShowLogin] = useState(false)
  // const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(true)

  return (
     <>
   {showLogin?<LoginPopUp setShowLogin={setShowLogin} /> : <></>}
   {/* {showForgotPassword ? <ForgotPassword setShowForgotPassword={setShowForgotPassword} /> : <></>} */}
   {setShowResetPassword? <setShowResetPassword setShowResetPassword = {setShowResetPassword} /> : <></>}

     <div className='app'>

     <Navbar  setShowLogin= {setShowLogin}/>
     <Routes>
  
   <Route path='/' element={<Home />} />
   <Route path='/cart' element={<Cart />} />
   <Route path='/order' element={<PlaceOrder />} />
    <Route path='/verify' element={<Verify />} />
    <Route path='/myorders' element={<MyOrders />} />
    <Route path='/forgotpassword' element={<ForgotPassword  />} />
    <Route path='/resetpassword/:id/:token' element={<ResetPassword setShowResetPassword= {setShowResetPassword}  setShowLogin = {setShowLogin}/>} /> 
    <Route  path='about' element={<About />} />  
    </Routes>

   
   </div>
   <Footer />
     
     </>
    
   
  )
}

export default App


