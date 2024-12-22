// import React, {useState, useContext } from 'react'
// import './Cart.css'
// import { StoreContext } from '../../context/StoreContext'
// import { useNavigate } from 'react-router'

// const Cart = ({ setShowLogin }) => {

//     const { cartItems, food_list, removeFromCart , getTotalCartAmount, url, token } = useContext(StoreContext)

//     const navigate = useNavigate();

//     const [checkout, setCheckout] = useState("");

    
//     const check_Out = () => {
//         if (!token) {
//             setShowLogin(true);

//         } else {
//             navigate('/order');
//         }
       

//     };

//     return (
//         <div className='cart'>
//             <div className='cart-items'>
            
//                     <h1>Cart Items</h1>

                
//                 <div className='cart-items-title'>
//                     <p>Items</p>
//                     <p>Title</p>
//                     <p>Price</p>
//                     <p>Quantity</p>
//                     <p>Total</p>
//                     <p>Remove</p>

//                 </div>

                
//                 <br />
//                 <hr />

//                 {food_list.map((item, index) => {
//                     if (cartItems[item._id] > 0) {
//                         return (

//                             <div>

//                                 <div className='cart-items-title cart-items-item' >
//                                     <img src={item.image} alt='' />
//                                     <p>{item.name}</p>
//                                     <p>#{Number(item.price).toLocaleString()}</p>
//                                     <p>{cartItems[item._id]}</p>
//                                     <p>#{(item.price * cartItems[item._id]).toLocaleString()}</p>
//                                     <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>

//                                 </div>
//                                 <hr />
//                             </div>

//                         )
//                     } 

                     
//                 })}
//             </div>
//             <div className='cart-bottom'>
//               <div className='cart-total'>
//                <h2>Cart Totals</h2>
//                 <div>
//                     <div className='cart-total-details'>
//                     <p>Subtotal</p>
//                     <p>#{getTotalCartAmount().toLocaleString()}</p>
//                     </div>
//                     <hr />
//                     <div className='cart-total-details'>
//                     <p>Delivery Fee</p>
//                     <p># {(getTotalCartAmount()===0 ? 0 : 2000).toLocaleString()}</p>
//                     </div>
//                     <hr />
//                     <div className='cart-total-details'>
//                      <b>Total</b>
//                      <b>#{(getTotalCartAmount()===0 ? 0 : getTotalCartAmount() + 2).toLocaleString()}</b>
//                     </div>
//                     </div>
//                     {/* <button onClick={()=>navigate('/order')} >PROCEED TO CHECKOUT</button> */}
//                     <button onClick={check_Out} >PROCEED TO CHECKOUT</button> 
                    
//               </div>
//               <div  className='cart-promocode' >
//                 <div>
//                  <p>If you have a promo code, Enter it here</p>
//                  <div className='cart-promocode-input'>
//                  <input type='text' placeholder='promo code' />
//                  <button>Submit</button>
//                  </div>
//                 </div>
//               </div>
//             </div>
//         </div>
//     )
// }

// export default Cart

import React, { useState, useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router';

const Cart = ({ setShowLogin }) => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, token } = useContext(StoreContext);
    const navigate = useNavigate();
    const [checkout, setCheckout] = useState("");

    const check_Out = () => {
        if (!token) {
            setShowLogin(true);
        } else {
            navigate('/order');
        }
    };

    // Check if the cart is empty
    const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);

    return (
        <div className='cart'>
            <div className='cart-items'>
                <h1>Cart Items</h1>

                {!isCartEmpty && (
        <div className='cart-items-title'>
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
    )}

                <br />
                <hr />

                {/* Display a message if the cart is empty */}
                {isCartEmpty ? (
                    <p className="empty-cart-message">Your cart is empty</p>
                ) : (
                    food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div key={index}>
                                    <div className='cart-items-title cart-items-item'>
                                        <img src={item.image} alt='' />
                                        <p>{item.name}</p>
                                        <p>#{Number(item.price).toLocaleString()}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>#{(item.price * cartItems[item._id]).toLocaleString()}</p>
                                        <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                    </div>
                                    <hr />
                                </div>
                            );
                        }
                        return null;
                    })
                )}
            </div>

            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className='cart-total-details'>
                            <p>Subtotal</p>
                            <p>#{getTotalCartAmount().toLocaleString()}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <p>Delivery Fee</p>
                            <p>#{(getTotalCartAmount() === 0 ? 0 : 2000).toLocaleString()}</p>
                        </div>
                        <hr />
                        <div className='cart-total-details'>
                            <b>Total</b>
                            <b>#{(getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2000).toLocaleString()}</b>
                        </div>
                    </div>
                    <button onClick={check_Out}>PROCEED TO CHECKOUT</button>
                </div>

                <div className='cart-promocode'>
                    <div>
                        <p>If you have a promo code, enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type='text' placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
