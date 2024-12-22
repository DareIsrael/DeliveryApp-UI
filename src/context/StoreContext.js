
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
    


   
    console.log(process.env.REACT_APP_BACKEND_BASEURL)
    
    // "http://localhost:4000"
   

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        } 
        if (token) {
             await axios.post(url+"/api/cart/add",{itemId}, {headers:{token}})
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
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
            setFoodList(response.data.data);
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    
    

    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
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
            if (localStorage.getItem("token")) {
                const storedToken = localStorage.getItem("token");
                setToken(storedToken);
                // const decodedToken = jwtDecode(storedToken);
                // console.log(decodedToken);
                // setUserId(decodedToken.id); // Extract userId from decoded token
                setUserId(storedToken.id);
                await loadCartData(storedToken);
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
        url,
        token,
        setToken,
        userId
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;



