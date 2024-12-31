// import React, { useContext, useEffect } from 'react'
// import "./Verify.css"
// import { useNavigate, useSearchParams } from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext';
// import axios from "axios"

// const Verify = () => {


//   const [searchParams, setSearchParams] = useSearchParams();

//   const success = searchParams.get("success")
//   const orderId = searchParams.get("orderId")
//   const {url} = useContext(StoreContext)
//   const navigate = useNavigate();

//   const verifyPayment = async () => {
//     const response = await axios.post(url+"/api/order/verify",{success, orderId})

//     if (response.data.success) {
//        navigate("/myorders");
//     } else {
//         navigate("/")
//     }
//   }

//    useEffect (() => {
//     verifyPayment();
//    })


//   return (
//     <div className='verify'>
//         <div className='spinner'>

//         </div>


//     </div>
//   )
// }

// export default Verify



// import React, { useContext, useEffect, useState } from 'react';
// import "./Verify.css";
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// import axios from "axios";

// const Verify = () => {
//   const [searchParams] = useSearchParams();
//   const success = searchParams.get("success");
//   const orderId = searchParams.get("orderId");
//   const { url } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("Verifying your payment...");
//   const [isLoading, setIsLoading] = useState(true); // Added loading state

//   const verifyPayment = async () => {
//     if (!orderId || !success) {
//       setMessage("Invalid parameters. Please try again.");
//       setTimeout(() => navigate("/"), 2000);
//       return;
//     }

//     try {
//       const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
      
//       console.log('Response from backend:', response.data); // Add this line for debugging

//       if (response.data.success) {
//         setMessage("Payment successful! Kindly check your mail for the receipt. Redirecting...");
//         setTimeout(() => navigate("/myorders"), 3000); // Redirect after 2 seconds
//       } else {
//         setMessage("Payment failed. Redirecting to home...");
//         setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
//       }
//     } catch (error) {
//       console.error("Error verifying payment:", error);
//       setMessage("An error occurred. Please try again.");
//       setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
//     } finally {
//       setIsLoading(false); // Stop loading once the API call is done
//     }
//   };

//   useEffect(() => {
//     verifyPayment();
//   }, [navigate, orderId, success, url]);

//   return (
//     <div className='verify'>
//       {isLoading ? (
//         <div className='spinner'></div> // Show spinner while loading
//       ) : (
//         <div className='verify-message'>{message}</div>
//       )}
//     </div>
//   );
// };

// export default Verify;

// import React, { useContext, useEffect, useState } from 'react';
// import "./Verify.css";
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// import axios from "axios";

// const Verify = () => {
//   const [searchParams] = useSearchParams();
//   const success = searchParams.get("success");
//   const orderId = searchParams.get("orderId");
//   const { url } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [message, setMessage] = useState("Verifying your payment...");
//   const [isLoading, setIsLoading] = useState(true);

//   const verifyPayment = async () => {
//     if (!orderId || !success) {
//       setMessage("Invalid parameters. Please try again.");
//       setTimeout(() => navigate("/"), 2000);
//       return;
//     }

//     try {
//       const response = await axios.post(`${url}/api/order/verify`, { success, orderId });

     

//       if (response.data.success) {
//         setMessage("Payment successful! Kindly check your mail for the receipt. Redirecting...");
//         setTimeout(() => navigate("/myorders"), 3000);
//       } else {
//         setMessage("Payment failed. Please try again later.");
//         setTimeout(() => navigate("/"), 2000);
//       }
//     } catch (error) {
//       console.error("Error verifying payment:", error);
//       setMessage("An error occurred while verifying your payment. Please try again.");
//       setTimeout(() => navigate("/"), 2000);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     verifyPayment();
//   }, [navigate, orderId, success, url]);

//   return (
//     <div className='verify'>
//       {isLoading ? (
//         <div className='spinner'></div> // Show spinner while loading
//       ) : (
//         <div className='verify-message'>{message}</div>
//       )}
//     </div>
//   );
// };

// export default Verify;


import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './Verify.css';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get("orderId");  // Get orderId from URL
    const navigate = useNavigate();
    const [message, setMessage] = useState("Verifying your payment...");
    const [isLoading, setIsLoading] = useState(true);

    const fetchPaymentStatus = async () => {
        try {
            // Fetch the payment status of the order from the backend
            const response = await axios.get(`/api/orders/payment-status/${orderId}`);

            if (response.data.success) {
                const paymentStatus = response.data.paymentStatus;

                if (paymentStatus === "Paid") {
                    setMessage("Payment successful! Redirecting to your orders...");
                    setTimeout(() => navigate("/myorders"), 3000);  // Redirect after success
                } else if (paymentStatus === "Failed") {
                    setMessage("Payment failed. Please try again later.");
                    setTimeout(() => navigate("/"), 3000);  // Redirect after failure
                } else {
                    setMessage("Payment status unknown. Please try again.");
                    setTimeout(() => navigate("/"), 3000);
                }
            } else {
                setMessage("Order not found. Redirecting...");
                setTimeout(() => navigate("/"), 2000);  // Redirect if order not found
            }
        } catch (error) {
            console.error("Error fetching payment status:", error);
            setMessage("Error verifying payment. Please try again.");
            setTimeout(() => navigate("/"), 2000);  // Redirect if error occurs
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (orderId) {
            fetchPaymentStatus();  // Call the function to verify the payment status
        } else {
            setMessage("Invalid parameters. Redirecting...");
            setTimeout(() => navigate("/"), 2000);  // Redirect if orderId is not found
        }
    }, [navigate, orderId]);

    return (
        <div className='verify'>
            {isLoading ? (
                <div className='spinner'></div> // Show a loading spinner
            ) : (
                <div className='verify-message'>{message}</div> // Display the message
            )}
        </div>
    );
};

export default Verify;
