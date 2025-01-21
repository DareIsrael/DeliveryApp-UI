// import React, { useContext, useState} from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'

// const FoodItem = ({id,name,price,description,image}) => {

// const [cartItems, setCartItems] = useState(0)
// //  const {cartItems, setCartItems, addToCart,removeFromCart} = useContext(StoreContext);

//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//       <img className='food-item-image' src={image}/>
//       {!cartItems
//            ? <img className='add' onClick={()=> setCartItems(prev=>prev+1)} src={assets.add_icon_white} />
//            : <div className='food-item-counter'>
//             <img onClick={()=>setCartItems (prev=>prev-1)} src = {assets.remove_icon_red} />
//             <p>{cartItems}</p>
//             <img  onClick={()=>setCartItems(prev=>prev+1)} src={assets.add_icon_green}></img>
//             </div>
//       }     
//       </div>
//       <div className='food-item-info'>
//       <div className='food-item-name-rating'>
//       <p>{name}</p>
//       <img className='rating-stars' src={assets.rating_stars}/>
//       </div>
//       <p className='food-item-desc'>{description}</p>
//       <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   )
// }

// export default FoodItem



// import React, { useContext } from 'react';
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../context/StoreContext';

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { cartItems, addToCart, removeFromCart , url} = useContext(StoreContext);

//   return (
//     <div className='food-item'>
//       <div className='food-item-img-container'>
//         <img className='food-item-image' src={image} alt={name} />
//         {!cartItems[id] ? (
//           <img 
//             className='add' 
//             onClick={() => addToCart(id)}  // Pass the id to addToCart
//             src={assets.add_icon_white} 
//             alt="Add to cart" 
//           />
//         ) : (
//           <div className='food-item-counter'>
//             <img 
//               onClick={() => removeFromCart(id)}  // Pass the id to removeFromCart
//               src={assets.remove_icon_red} 
//               alt="Remove from cart" 
//             />
//             <p>{cartItems[id]}</p>  {/* Display the quantity specific to this item */}
//             <img  
//               onClick={() => addToCart(id)}  // Pass the id to addToCart
//               src={assets.add_icon_green} 
//               alt="Add more to cart" 
//             />
//           </div>
//         )}
//       </div>
//       <div className='food-item-info'>
//         <div className='food-item-name-rating'>
//           <p>{name}</p>
//           <img className='rating-stars' src={assets.rating_stars} alt="Rating" />
//         </div>
//         <p className='food-item-desc'>{description}</p>
//         <p className='food-item-price'>${price}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;



// import React, { useContext, useState } from 'react';
// import './FoodItem.css';
// import { assets } from '../../assets/assets';
// import { StoreContext } from '../../context/StoreContext';

// const FoodItem = ({ id, name, price, description, image }) => {
//   const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
//   const [showModal, setShowModal] = useState(false);

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   return (
//     <>
//       <div className='food-item'>
//         <div className='food-item-img-container'>
//           <img 
//             className='food-item-image' 
//             src={url + "/images/" + image} 
//             alt={name}
//             onClick={handleShow} // Trigger modal on image click
//           />
//           {!cartItems[id] ? (
//             <img 
//               className='add' 
//               onClick={() => addToCart(id)}  // Pass the id to addToCart
//               src={assets.add_icon_white} 
//               alt="Add to cart" 
//             />
//           ) : (
//             <div className='food-item-counter'>
//               <img 
//                 onClick={() => removeFromCart(id)}  // Pass the id to removeFromCart
//                 src={assets.remove_icon_red} 
//                 alt="Remove from cart" 
//               />
//               <p>{cartItems[id]}</p>  {/* Display the quantity specific to this item */}
//               <img  
//                 onClick={() => addToCart(id)}  // Pass the id to addToCart
//                 src={assets.add_icon_green} 
//                 alt="Add more to cart" 
//               />
//             </div>
//           )}
//         </div>
//         <div className='food-item-info'>
//           <div className='food-item-name-rating'>
//             <p>{name}</p>
//             <img className='rating-stars' src={assets.rating_stars} alt="Rating" />
//           </div>
//           <p className='food-item-desc'>{description}</p>
//           <p className='food-item-price'>${price}</p>
//         </div>
//       </div>

//       {/* Modal */}
//       <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
//               <button type="button" className="close" onClick={handleClose} aria-label="Close">
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <img className="img-fluid custom-modal-img" src={url + "/images/" + image} alt={name} />
//               <p>{name}</p>
//               <p className='food-item-price'>${price}</p>
              
//             </div>
//             <div className="modal-footer">
//               <p>{description}</p>
//               <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FoodItem;


import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom'
import Reviews from '../Reviews/Reviews';


const FoodItem = ({ id, name, price, initprice, discount, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext); // Removed 'url'
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className='food-item' id='food-item'>
        <div onClick={handleShow} className='food-item-img-container'>
        <img 
       className='food-item-image' 
       src={`${image}?v=${new Date().getTime()}`}  // Append a timestamp to force refresh
       alt={name}
       onClick={handleShow} // Trigger modal on image click
      />
           
           {/* <button className='add' >Buy Now</button>  */}
           {/* {!cartItems[id] ? (
              <button className='add'  
                 >Buy Now</button>  
              
           ) : (
             <div className='food-item-counter'> 
           
              <img 
              onClick={() => removeFromCart(id)}  
                src={assets.remove_icon_red} 
                 alt="Remove from cart" 
              /> 
              <p>{cartItems[id]}</p>   
               <img  
                 onClick={() => addToCart(id)}  
                src={assets.add_icon_green}  
                 alt="Add more to cart"  
               /> 
            
             </div>
           
           )} 
           */}
          
        </div>
        <div className='food-item-info'>
          <div className='food-item-name-rating'>

            <p>{name}</p>
            {/* <img className='rating-stars' src={assets.rating_stars} alt="Rating" /> */}
          </div>
          
          {/* <p className='food-item-desc'>{description}</p> */}
          <p className='food-item-price'> ₦ {Number(price).toLocaleString()}</p>
          
          <div className='discount'>
          <p className='food-item-initprice'>{initprice}</p>
          <p className='discount_percent'>{discount}</p>
          
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
              <button type="button" className="close" onClick={handleClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img className="img-fluid custom-modal-img"  src={`${image}?v=${new Date().getTime()}`} alt={name} />  {/* Cloudinary URL */}
             
              <p>{name} <span className='brand_new'>Brand New</span></p>
              
              <p className='food-item-price'>₦ {Number(price).toLocaleString()}</p>
              {/* <p className='star'>★★★★★</p> */}
            </div>
            <p className='prod_details'>Product details</p>
            <p className='modal_des'>{description}</p>

            <hr></hr>

            <div  className='add_cart_modal'>
            
            {!cartItems[id] ? (
              <button className='add_modal' 
              onClick={() => addToCart(id)}  >Add to cart</button> 
              
          ) : (
            <div className='food-item-modal'>
           
              <button className='remove_from_cart'
                onClick={() => removeFromCart(id)}  // Pass the id to removeFromCart
                >-</button> 
              <p className='cart_quantity'>{cartItems[id]}</p>  {/* Display the quantity specific to this item */}
              <button  className='remove_from_cart'
                onClick={() => addToCart(id)}  // Pass the id to addToCart
                
                >+</button> 
              
            
            </div>
           
          )}
          {!cartItems[id] ? (
           <></>
              
          ) : (
            <div className='cart_modal'>
           {/* <Link to='/cart' ><img src={assets.cart} /> </Link> */}
           <Link to='/cart' ><p >🛒</p>  </Link>

            <div className="dot"></div>
           
    </div>
          )

           }

           </div>
           <div className="reviews-section">
             
           {/* <Reviews foodId={id} /> */}
              
            </div>
            
            <div className="modal-footer">
             
        
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
