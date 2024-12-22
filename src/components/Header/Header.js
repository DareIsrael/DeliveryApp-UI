// import React from 'react'
// import './Header.css'

// const Header = () => {
//   return (
//     <div className='header'>
//       <div className='header-contents'>
//      <h2>Shop premium electronics at competitive prices with daily deals and exclusive offers.</h2>
//      <p>Get your orders delivered promptly and securely, straight to your door.
//      Whether online or in-store, we’re committed to providing an easy, hassle-free shopping journey.
//      </p>
//      <a href='#food-item' > <button>View Products</button> </a>

//       </div>
//     </div>
//   )
// }

// export default Header


import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const contentItems = [
    "Shop premium electronics at competitive prices with daily deals and exclusive offers.",
    "Upgrade your kitchen with top-quality appliances designed for convenience and style.",
    "Discover furniture that combines comfort, durability, and elegance for your home.",
    "Fast and secure delivery straight to your doorstep—shop with confidence today!"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 3000); // Change content every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [contentItems.length]);

  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>{contentItems[currentIndex]}</h2>
        <p>
          Get your orders delivered promptly and securely, straight to your door.
          Whether online or in-store, we’re committed to providing an easy, hassle-free shopping journey.
        </p>
        <a href='#food-item'>
          <button>View Products</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
