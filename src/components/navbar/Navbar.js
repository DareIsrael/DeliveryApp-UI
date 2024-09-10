import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home")
   const {getTotalCartAmount, token, setToken} = useContext(StoreContext)

   const navigate = useNavigate();

   const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/")

   }
 

  return (
    <div className='navbar'>
   <Link to='/'  > <img className='logo' src={assets.logo} /> </Link>
    <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>Product</a>
        <a href='#about-us' onClick={()=>setMenu("about-us")} className={menu==="#about-us"?"active":""}>About Us</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
     
    </ul>
    <div className='navbar-right'>
     <Link to="/" ><img className='hidden_home' src={assets.search_icon}/> </Link> 
    <div className='navbar-search-icon'>
       <Link to='/cart' ><img src={assets.cart} /> </Link>

        <div className={getTotalCartAmount()===0?"":"dot"}></div>
    </div>
    {!token?  <button onClick={()=> setShowLogin(true)}>signin</button>
     : <div className='navbar-profile'>
      <img src={assets.profile_icon} />
      <ul className='nav-profile-dropdown'>
      <li onClick={()=>navigate('/myorders')} ><img src={assets.bag_icon} /> <p>Orders</p> </li>
      <hr />
      <li onClick={logout} ><img src={assets.logout_icon} /> <p>logout</p> </li>
      </ul>
     </div> }
    </div>
    </div>
  )
}

export default Navbar


