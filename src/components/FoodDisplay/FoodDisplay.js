// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'

// const FoodDisplay = ({category}) => {
//     const {food_list} = useContext(StoreContext)

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Our Gadgets</h2>
//       <div className='food-display-list'>
//       {food_list.map((item,index)=> {
//         if (category==="All" || category===item.category) {
//             return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price ={item.price} image={item.image} />
//         }
//        {/* return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price ={item.price} image={item.image} /> */}
//       })}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay



// import React, { useContext, useState } from 'react';
// import './FoodDisplay.css';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';

// const FoodDisplay = ({ category }) => {
//     const { food_list, fetchFoodList } = useContext(StoreContext); // Ensure fetchFoodList is provided in the context
//     const [searchQuery, setSearchQuery] = useState("");

//     const handleSearch = () => {
//         fetchFoodList(searchQuery, category);
//     };

//     return (
//         <div className="food-display" id="food-display">
//             <h2>Our Gadgets</h2>
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     placeholder="Search by name or category"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <button onClick={handleSearch}>Search</button>
//             </div>
//             <div className="food-display-list">
//                 {food_list.map((item, index) => {
//                     if (category === "All" || category === item.category) {
//                         return (
//                             <FoodItem
//                                 key={index}
//                                 id={item._id}
//                                 name={item.name}
//                                 description={item.description}
//                                 price={item.price}
//                                 image={item.image}
//                             />
//                         );
//                     }
//                     return null;
//                 })}
//             </div>
//         </div>
//     );
// };

// export default FoodDisplay;



// import React, { useContext, useState, useEffect } from 'react';
// import './FoodDisplay.css';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';

// const FoodDisplay = ({ category }) => {
//     const { food_list, fetchFoodList } = useContext(StoreContext); // Ensure fetchFoodList is provided in the context
//     const [searchQuery, setSearchQuery] = useState("");
//     const [fetchNone, setFetchNone] = useState("")

//     useEffect(() => {
//         // Fetch food list when searchQuery changes or is cleared
//         if (searchQuery === "") {
//             // Fetch all items when the searchQuery is cleared
//             fetchFoodList("", category );
//         } else {
//             // Fetch based on searchQuery
//             fetchFoodList(searchQuery, category);
//         }
//     }, [searchQuery, category, fetchFoodList]); // Re-run when searchQuery or category changes

    
  

//     return (
//         <div className="food-display" id="food-display">
//             <h2>Our Products</h2>
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     placeholder=" 🔍  Search products by name or category"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
//                 />
//             </div>
//             {food_list.length === 0 && searchQuery && (
//                <p className="no-results">No results found for "{searchQuery}"</p>
//            )}

//             <div className="food-display-list">
//                 {food_list.map((item, index) => {
//                     if (category === "All" || category === item.category) {
//                         return (
//                             <FoodItem
//                                 key={index}
//                                 id={item._id}
//                                 name={item.name}
//                                 description={item.description}
//                                 price={item.price}
//                                 initprice={item.initprice}
//                                 discount={item.discount}
//                                 image={item.image}
//                             />
//                         );
//                     }
//                     return null;
//                 })}
//             </div>
//         </div>
//     );
// };

// export default FoodDisplay;

import React, { useContext, useState, useEffect } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';


const FoodDisplay = ({ category }) => {
    const { food_list, fetchFoodList } = useContext(StoreContext);
    const [searchQuery, setSearchQuery] = useState("");
    const [queryToSearch, setQueryToSearch] = useState("");

    useEffect(() => {
        // Fetch food list when queryToSearch or category changes
        fetchFoodList(queryToSearch, category);
    }, [queryToSearch, category, fetchFoodList]);

    // Handler for clicking the search button
    const handleSearch = () => {
        setQueryToSearch(searchQuery.trim());
    };

    // Handler for clearing the input field
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        // If the input field is cleared, fetch all data
        if (value === "") {
            setQueryToSearch(""); // Set queryToSearch to empty to fetch all data
        }
    };
    
    const handleRefresh = () => {
        window.location.reload();
    };
    

    return (
        <div className="food-display" id="food-display">
            <h2>Our Products</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="🔍 Search products by name or category"
                    value={searchQuery}
                    onChange={handleInputChange} // Update searchQuery on input change
                />
                <button onClick={handleSearch} className="search-button">
                    Search
                </button>
            </div>
            {/* refresh */}
            <div>
            <button className="search-button" onClick={handleRefresh}>All Products</button>
            </div>
            {/* refresh */}

            {/* Display 'No results found' when food_list is empty */}
            {food_list.length === 0 && queryToSearch && (
                <p className="no-results">No results found for "{queryToSearch}"</p>
            )}

            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                initprice={item.initprice}
                                discount={item.discount}
                                image={item.image}
                            />
                        );
                        
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;
