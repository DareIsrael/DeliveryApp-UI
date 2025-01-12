// import React from 'react'
// import './Footer.css'
// import { assets } from '../../assets/assets'
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//        <div className='footer-content'>
//           <div className='footer-content-left'>
//            <img  className='about_logo' src={assets.logo}   />
//            <div className='about'  id='about-us'>
//       <h2>About Us</h2>
//       <p>Welcome to ElectroVault, your trusted partner for top-quality home appliances and entertainment solutions.
//          Our mission is to bring innovation, style, and convenience to every home, offering a carefully curated selection of Smart TVs,
//           TV consoles, sound systems, cookers, fans, and other essential household appliances.
//          We understand the importance of reliable, high-performing products that elevate your living experience. 
//          That’s why we work with only the most reputable brands to ensure you get nothing but the best. 
//          Whether you're upgrading your home entertainment system, revamping your kitchen, or simply improving the comfort of your living space, 
//          we have the right solution for you. At ElectroVault, we don’t just sell products—we offer solutions that meet your needs with exceptional customer service,
//          fast delivery, and competitive prices. Our team is dedicated to helping you find the perfect match for your home, ensuring that every purchase you make with us brings satisfaction and enhances your daily life. Thank you for choosing us. We look forward to serving you with excellence and making your home more comfortable and enjoyable.


//         </p>

        
      
//        </div>
            
//           </div>

//           <div className='footer-contact'>

//           {/* <div className='footer-content-center'>
//            <h2>COMPANY</h2>
//            <ul>
//            <li>Home</li>
//            <Link to='/about'><li>About Us</li></Link> 
//            <li>Delivery</li>
//            <li>Privacy</li>
            
//            </ul>
//           </div> */}
          
//           <div className='footer-content-right'>
//            <h2>GET IN TOUCH</h2>
           
//             <p>Phone: 09164633498</p>
//             <p>Email: support@myelectrovault.com</p>
//             {/* <div>
//                 <img  src={assets.facebook_icon} />
//                 <img  src={assets.twitter_icon}/>
//                 <img  src={assets.instagram_icon} />
//             </div> */}
         
           
//           </div>

//           </div>
          

//        </div>
//        <hr />
//        <p className='footer-copyright'>©2025 MyElectrovault| All Right Reserved</p>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <img  className='footer_logo' src={assets.logo}   />
        <div className="footer-links">
        
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@myelectrovault.com</p>
          <p>Phone: (+234) 91 6463 3598</p>
          {/* <p>Address: 123 Tech Avenue, Silicon City</p> */}
        </div>
        <div className="footer-social">
          <h3>Platforms</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ElectroVault. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
