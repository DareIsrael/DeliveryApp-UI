
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
export const StoreContext = createContext(null);




const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = process.env.REACT_APP_BACKEND_BASEURL;
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])
    const [userId, setUserId] = useState(""); 
    const [reviews, setReviews] = useState({});
    const [loading, setLoading] = useState(true);

    


   
    
   

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        } 
        if (token) {
             await axios.post(url+"/api/cart/add",{itemId}, { headers: {
                    Authorization: `Bearer ${token}`
                }})
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId},{ headers: {
                    Authorization: `Bearer ${token}`
                }})
        }
    }

    

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) { // Check if itemInfo is found
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }
      
    // const fetchReviews = async (foodId) => {
    //     try {
    //         const response = await axios.get(`${url}/api/reviews/${foodId}`);
    //         setReviews((prev) => ({ 
    //             ...prev, 
    //             [foodId]: response.data.reviews 
    //         }));
    //     } catch (error) {
    //         console.error("Error fetching reviews:", error);
    //     }
    // };
    
    
    // const addReview = async (foodId, review) => {
    //     try {
    //         const response = await axios.post(
    //             `${url}/api/reviews/${foodId}`,
    //             review,  // Send only the review data, not the entire reviews state
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         );
    //         setReviews((prev) => ({
    //             ...prev,
    //             [foodId]: [...(prev[foodId] || []), response.data.newReview] // Append the new review
    //         }));
    //     } catch (error) {
    //         console.error("Error adding review:", error);
    //     }
    // };
    
    
    
    
    // const fetchFoodList = async () => {
    //     const response = await axios.get(url+"/api/food/list")
    //     setFoodList(response.data.data)
    // }

    const fetchFoodList = async (searchQuery = "", category = "") => {
        try {
            const response = await axios.get(url + `/api/food/list`, {
                params: {
                    name: searchQuery,
                    category: category !== "All" ? category : undefined, // Avoid sending "All" as a category filter
                },
            });
            setLoading(false)
            setFoodList(response.data.data);
            
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    
    

    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get", {}, { headers: {
        Authorization: `Bearer ${token}`
    } })
    console.log("Cart Data Response:", response.data);
        setCartItems(response.data.cartData);
    }
    //  not to be logout when refresh

    // useEffect (() =>{
    //     async function loadData() {
    //     await fetchFoodList()
    //     if(localStorage.getItem("token")){
    //         setToken(localStorage.getItem("token"));
    //         await loadCartData(localStorage.getItem("token"));
    //     }
        
    //     }
    //     loadData();
    // },[])

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                const decodedToken = jwtDecode(storedToken);
                
                setUserId(decodedToken.id); // Extract userId from decoded token
                // setUserId(storedToken.id);
                // await loadCartData(storedToken);
                if (storedToken) {
                    await loadCartData(storedToken);
                }
                
                
            }
            
        }
        loadData();
       
    }, []);
    

    const contextValue = {
        food_list,
        fetchFoodList,
     
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        // reviews,
        // fetchReviews,
        // addReview,
        url,
        token,
        setToken,
        userId,
        loading,
        setLoading
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;





// import { createContext, useEffect, useState } from "react";
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode'; // Ensure you're importing this properly
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState({});
//     const [token, setToken] = useState("");
//     const [food_list, setFoodList] = useState([]);
//     const [userId, setUserId] = useState(""); 
//     const url = process.env.REACT_APP_BACKEND_BASEURL;

//     // Function to add item to cart
//     const addToCart = async (itemId) => {
//         setCartItems((prev) => ({
//             ...prev,
//             [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//         }));
//         if (token) {
//             await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { Authorization: `Bearer ${token}` } });
//         }
//     };

//     // Function to remove item from cart
//     const removeFromCart = async (itemId) => {
//         setCartItems((prev) => ({
//             ...prev,
//             [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
//         }));
//         if (token) {
//             await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { Authorization: `Bearer ${token}` } });
//         }
//     };

//     // Function to calculate total cart amount
//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = food_list.find((product) => product._id === item);
//                 if (itemInfo) {
//                     totalAmount += itemInfo.price * cartItems[item];
//                 }
//             }
//         }
//         return totalAmount;
//     };

//     // Function to fetch food list with search and category filter
//     const fetchFoodList = async (searchQuery = "", category = "") => {
//         try {
//             const response = await axios.get(`${url}/api/food/list`, {
//                 params: {
//                     name: searchQuery,
//                     category: category !== "All" ? category : undefined, // Avoid sending "All" as a category filter
//                 },
//             });
//             setFoodList(response.data.data);
//         } catch (error) {
//             console.error("Error fetching food list:", error);
//         }
//     };

//     // Function to load cart data from server
//     const loadCartData = async (token) => {
//         const response = await axios.post(`${url}/api/cart/get`, {}, { headers: { Authorization: `Bearer ${token}` } });
//         setCartItems(response.data.cartData);
//     };

//     // Handle token from localStorage
//     useEffect(() => {
//         async function loadData() {
//             await fetchFoodList();
//             const storedToken = localStorage.getItem("token");
//             if (storedToken) {
//                 setToken(storedToken);
//                 try {
//                     const decodedToken = jwtDecode(storedToken);
//                     setUserId(decodedToken.id); // Assuming 'id' is in the decoded token
//                     await loadCartData(storedToken);
//                 } catch (error) {
//                     console.error("Invalid token", error);
//                     localStorage.removeItem("token"); // Remove invalid token
//                 }
//             }
//         }
//         loadData();
//     }, []);

//     const contextValue = {
//         food_list,
//         fetchFoodList,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         url,
//         token,
//         setToken,
//         userId,
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;
