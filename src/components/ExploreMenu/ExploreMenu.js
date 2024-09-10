

// import React from 'react'
// import './ExploreMenu.css'
// import { menu_list } from '../../assets/assets'

// const ExploreMenu = ({category,setCategory}) => {

 

//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our Products</h1>
//       <p className='explore-menu-text'> Browse our collections and find the perfect gadget for you. Whether you’re looking to enhance your home or stay on top of the latest tech trends,We got you covered.</p>
//       <div className='explore-menu-list'>
//        {menu_list.map ((item, index)=> {
//         return (
//             <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
//             <img className={category===item.menu_name?"active":""} src={item.menu_image} />
//             <p>{item.menu_name}</p>

//             </div>
//         )
//        })}
//       </div>
//       <hr></hr>
//     </div>
//   )
// }

// export default ExploreMenu




import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Products</h1>
      <p className="explore-menu-text">
        Browse our collections and find the perfect gadget for you. Whether you're looking to enhance your home or stay on top of the latest tech trends, we got you covered.
      </p>

      <div className="explore-menu-list">
        {/* Duplicate the list to create a seamless scroll */}
        <div className="explore-menu-list-wrapper">
          {menu_list.map((item, index) => (
            <div
              key={index}
              className="explore-menu-list-item"
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}  // Set category on click
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          ))}
          {menu_list.map((item, index) => (
            <div
              key={index + menu_list.length}
              className="explore-menu-list-item"
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}  // Set category on click
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

