// import React, { useContext, useEffect, useState } from 'react'
// import "./MyOrders.css"
// import { StoreContext } from '../../context/StoreContext'
// import axios from "axios"
// import { assets } from '../../assets/assets'

// const MyOrders = () => {

//     const {url, token} = useContext(StoreContext)
//     const [data, setData] = useState([])

//     const fetchOrders = async () => {
//         const response = await axios.post(url+"/api/order/userorders", {} , { headers: {
//           Authorization: `Bearer ${token}`
//       } })
//         setData(response.data.data);
       
//     }

//     useEffect (() => {
//         if (token) {
//             fetchOrders();
//         }
//     },[token])

//   return (
//     <div className='my-orders'>
//     <h2>My Orders</h2>
//     <div className='container'>
//     {
//         data.map((order, index)=> {
//           return (
//             <div key={index} className='my-orders-order'> 
//              <img src={assets.parcel_icon}  />
//               <p className='order_time'>
//                 {new Date(order.date).toLocaleString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                   hour: "numeric",
//                   minute: "numeric",
//                   second: "numeric",
//                   hour12: true,
//                 })}
//               </p>
//              <p>{order.items.map((item, index)=> {
//                 if (index === order.items.length - 1) {
//                     return item.name + " x " + item.quantity
//                 } else {
//                     return item.name + " x " + item.quantity + " , "
//                 }

//              })}</p>
//              <p>₦ {(order.amount).toLocaleString()}</p>
//              <p>Items: {order.items.length}</p>
//              <p className={order.payment ? "payment-status-paid" : "payment-status-failed"}>
//               Payment Status: {order.payment ? "Paid" : "Failed"}
//              </p>
             

//              <p><span>&#x25cf;</span> <b>{order.status} </b> </p>
//              <button onClick={fetchOrders}>Track Order</button>
//             </div>

//           )
//         })
//     }

//     </div>
      
//     </div>
//   )
// }

// export default MyOrders

import React, { useContext, useEffect, useState } from 'react';
import "./MyOrders.css";
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
import { assets } from '../../assets/assets';
import jsPDF from "jspdf";
// import logo from '../../assets/Mylogo.jpeg';

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    const generateReceipt = (order) => {
      const doc = new jsPDF();
  
      // Add title
      doc.setFontSize(18);
      doc.text("Payment Receipt", 105, 35, { align: "center" });
  
      // Add order details
      doc.setFontSize(12);
      doc.text(`Order ID: ${order._id}`, 20, 50);
      if (order.address && typeof order.address === "object") {
          doc.text("Customer Address:", 20, 70);
          let yPosition = 80;
          doc.text(`Name: ${order.address.firstName || 'N/A'} ${order.address.lastName || 'N/A'}`, 20, yPosition);
          yPosition += 10;
          doc.text(`Email: ${order.address.email || 'N/A'}`, 20, yPosition);
          yPosition += 10;
          doc.text(`Street: ${order.address.street || 'N/A'}`, 20, yPosition);
          yPosition += 10;
          doc.text(`City: ${order.address.city || 'N/A'}`, 20, yPosition);
          yPosition += 10;
          doc.text(`State: ${order.address.state || 'N/A'}`, 20, yPosition);
          yPosition += 10;
          doc.text(`Zipcode: ${order.address.zipcode || 'N/A'}`, 20, yPosition);
          yPosition += 10;
          doc.text(`Country: ${order.address.country || 'N/A'}`, 20, yPosition);
          yPosition += 10;
          doc.text(`Phone: ${order.address.phone || 'N/A'}`, 20, yPosition);
      } else {
          doc.text(`Customer Address: ${order.address || 'N/A'}`, 20, 70);
      }
  
      // Add order date
      doc.text(`Date: ${new Date(order.date).toLocaleString("en-US")}`, 20, 160);
  
      // Add items
      doc.text("Items:", 20, 180);
      let yPosition = 190;
      order.items.forEach((item) => {
          doc.text(`- ${item.name} x ${item.quantity} @ ₦${item.price.toLocaleString()}`, 20, yPosition);
          yPosition += 10;
      });
  
      // Add total
      doc.text(`Total: ₦${order.amount.toLocaleString()}`, 20, yPosition + 10);
  
      // Add footer with logo and name
      const footerLogoUrl = '../../../assets/logo.jpeg'; // Replace with the path to your footer logo
      doc.addImage(footerLogoUrl, 'JPEG', 20, yPosition + 20, 20, 20); // Adjust logo position and size
      doc.setFontSize(10);
      doc.text("Thank you for your purchase", 105, yPosition + 30, { align: "center" });
      doc.text("@myelectrovault.com", 105, yPosition + 40, { align: "center" });
  
      // Save PDF
      doc.save(`receipt_${order._id}.pdf`);
  };
  
    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className='container'>
                {data.length > 0 ? (
                    data.map((order, index) => (
                        <div key={index} className='my-orders-order'>
                            <img src={assets.parcel_icon} alt="Parcel Icon" />
                            <p className='order_time'>
                                {new Date(order.date).toLocaleString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    second: "numeric",
                                    hour12: true,
                                })}
                            </p>
                            <p>
                                {order.items.map((item, index) => (
                                    `${item.name} x ${item.quantity}` + (index === order.items.length - 1 ? '' : ' , ')
                                ))}
                            </p>
                            <p>₦ {(order.amount).toLocaleString()}</p>
                            <p>Items: {order.items.length}</p>
                            <p className={order.payment ? "payment-status-paid" : "payment-status-failed"}>
                                Payment Status: {order.payment ? "Paid" : "Failed"}
                            </p>
                            
                            {order.payment && (
                              <button className='receipt' onClick={() => generateReceipt(order)}>Receipt</button>
                     ) }
                            <div className='track'>
                            <button onClick={fetchOrders}>Track Order</button>
                            <p><span>&#x25cf;</span> <b>{order.status}</b></p>

                            </div>
                            
                        </div>
                    ))
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
