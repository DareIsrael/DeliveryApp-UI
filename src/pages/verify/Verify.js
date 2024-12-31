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


import React, { useContext, useEffect, useState } from 'react';
import "./Verify.css";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId"); // Get the orderId from query parameters
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [message, setMessage] = useState("Checking your payment status...");
  const [isLoading, setIsLoading] = useState(true);

  const fetchPaymentStatus = async () => {
    if (!orderId) {
      setMessage("Invalid parameters. Redirecting...");
      setTimeout(() => navigate("/"), 2000);
      return;
    }

    try {
      // Make a request to the backend to get the payment status of the order
      const response = await axios.get(`${url}/api/verifyPayment/${orderId}`); // Assuming this endpoint returns the payment status

      const { paymentStatus } = response.data;

      if (paymentStatus === "Paid") {
        setMessage("Payment successful! Redirecting to your orders...");
        setTimeout(() => navigate("/myorders"), 3000);
      } else {
        setMessage("Payment failed or still pending. Redirecting...");
        setTimeout(() => navigate("/"), 3000);
      }
    } catch (error) {
      console.error("Error fetching payment status:", error);
      setMessage("An error occurred while verifying your payment. Please try again.");
      setTimeout(() => navigate("/"), 2000);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentStatus();
  }, [navigate, orderId, url]);

  return (
    <div className='verify'>
      {isLoading ? (
        <div className='spinner'></div> // Show spinner while loading
      ) : (
        <div className='verify-message'>{message}</div>
      )}
    </div>
  );
};

export default Verify;
