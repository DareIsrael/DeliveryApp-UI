import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home")
   const {getTotalCartAmount, token, setToken,cartItems} = useContext(StoreContext)

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
        <a href='/' onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>Products</a>
        <a href='/about' onClick={()=>setMenu("about-us")} className={menu==="#about-us"?"active":""}>About Us</a>
        <a href='/contact' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact</a>
     
    </ul>
    <div className='navbar-right'>
    <div  className='hidden_home' >
    <Link to="/" ><img  src={assets.search_icon}/> </Link>
    <p className='nav_p' >Home</p>
    </div>
      
    <div className='navbar-cart'>
       {/* <Link to='/cart' ><img src={assets.cart} /> </Link> */}
       <Link to='/cart' ><h2 >🛒</h2>  </Link>

        <div className={getTotalCartAmount()===0?"":"dot"}></div>
       
        <p className='nav_p' >Cart</p>
    </div>
    {!token?  <div><button className='signin_btn' onClick={()=> setShowLogin(true)}>sign in</button> <span  className='sign_in_user'   onClick={()=> setShowLogin(true)}> <i class="fa-regular fa-user"></i></span></div>
     : <div className='navbar-profile'>
      <img className='navbar-profile-img' src={assets.profile_icon} />
      <p className='nav_p' >Account</p>
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



// import React, { useContext, useState } from 'react';
// import './navbar.css';
// import { assets } from '../../assets/assets';
// import { Link, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token, setToken, cartItems } = useContext(StoreContext);

//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-logo">
//         <img className="logo" src={assets.logo} alt="Logo" />
//       </Link>
//       <ul className="navbar-menu">
//         <Link
//           to="/"
//           onClick={() => setMenu("home")}
//           className={`navbar-link ${menu === "home" ? "active" : ""}`}
//         >
//           Home
//         </Link>
//         <a
//           href="#explore-menu"
//           onClick={() => setMenu("menu")}
//           className={`navbar-link ${menu === "menu" ? "active" : ""}`}
//         >
//           Products
//         </a>
//         <a
//           href="#about-us"
//           onClick={() => setMenu("about-us")}
//           className={`navbar-link ${menu === "about-us" ? "active" : ""}`}
//         >
//           About Us
//         </a>
//         <a
//           href="#footer"
//           onClick={() => setMenu("contact-us")}
//           className={`navbar-link ${menu === "contact-us" ? "active" : ""}`}
//         >
//           Contact Us
//         </a>
//       </ul>
//       <div className="navbar-right">
//         <div className="navbar-cart">
//           <Link to="/cart">
//             <img src={assets.cart} alt="Cart" />
//           </Link>
//           {getTotalCartAmount() > 0 && <div className="cart-dot"></div>}
//           <p className="navbar-text">Cart</p>
//         </div>
//         {!token ? (
//           <button className="signin-button" onClick={() => setShowLogin(true)}>
//             Sign In
//           </button>
//         ) : (
//           <div className="navbar-profile">
//             <img src={assets.profile_icon} alt="Profile" />
//             <p className="navbar-text">Account</p>
//             <ul className="profile-dropdown">
//               <li onClick={() => navigate("/myorders")}>
//                 <img src={assets.bag_icon} alt="Orders" />
//                 <p>Orders</p>
//               </li>
//               <hr />
//               <li onClick={logout}>
//                 <img src={assets.logout_icon} alt="Logout" />
//                 <p>Logout</p>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
