import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className='footer-content'>
          <div className='footer-content-left'>
           <img  src={assets.logo}   />
           <div className='about'  id='about-us'>
      <h2>About Us</h2>
      <p>Welcome to [Your Website Name], your trusted partner for top-quality home
       appliances and entertainment solutions. Our mission is to bring innovation,
        style, and convenience to every home, offering a carefully curated selection 
        of Smart TVs, TV consoles, sound systems, cookers, fans, and other essential household appliances.
        </p>

        <p> We understand the importance of reliable, high-performing products that
         elevate your living experience. That’s why we work with only the most reputable
        brands to ensure you get nothing but the best. Whether you're upgrading your 
        home entertainment system, revamping your kitchen, or simply improving the
        comfort of your living space, we have the right solution for you.
        </p>

        <p> At [Your Website Name], we don’t just sell products—we offer solutions
         that meet your needs with exceptional customer service, fast delivery, and
         competitive prices. Our team is dedicated to helping you find the perfect 
         match for your home, ensuring that every purchase you make with us brings
         satisfaction and enhances your daily life.

         Thank you for choosing us. We look forward to serving you with excellence and making your home more comfortable and enjoyable.

       </p>
       </div>
            
          </div>

          <div className='footer-contact'>

          <div className='footer-content-center'>
           <h2>COMPANY</h2>
           <ul>
           <li>Home</li>
           <Link to='/about'><li>About Us</li></Link> 
           <li>Delivery</li>
           <li>Privacy</li>
            
           </ul>
          </div>
          
          <div className='footer-content-right'>
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>07030661043</li>
            <li>dareisrael4@gmail.com</li>
            <div>
                <img  src={assets.facebook_icon} />
                <img  src={assets.twitter_icon}/>
                <img  src={assets.instagram_icon} />
            </div>
           </ul>
           
          </div>

          </div>
          

       </div>
       <hr />
       <p className='footer-copyright'>Copyright 2024. Bright.com- All Right Reserved</p>
    </div>
  )
}

export default Footer
