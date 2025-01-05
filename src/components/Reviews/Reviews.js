// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import "./Reviews.css"; // Optional: Add styles for reviews
// import { StoreContext } from "../../context/StoreContext";

// const Reviews = ({ foodId }) => {
//     const [rating, setRating] = useState(0);
//     const [comment, setComment] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const { reviews, fetchReviews, addReview } = useContext(StoreContext);

//     useEffect(() => {
//         // Fetch reviews for the food item
//         fetchReviews(foodId);
//     }, [foodId, fetchReviews]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null); // Reset error state
//         if (!rating) {
//             setError("Please select a rating.");
//             setLoading(false);
//             return;
//         }
//         const sanitizedComment = comment.trim();
//         try {
//             await addReview(foodId, { rating: parseInt(rating, 10), comment: sanitizedComment });
//             setRating(0);
//             setComment("");
//         } catch (error) {
//             setError("Failed to submit review. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };
    
    

//     return (
//         <div className="reviews">
//             <h3>Reviews</h3>
//             {reviews[foodId] ? (
//                 <ul>
//                     {reviews[foodId].map((review) => (
//                         <li key={review._id}>
//                             {/* <p>{review.user}</p> */}
//                             <p>Rating: {review.rating} / 5</p>
//                             <p>{review.comment}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No reviews available for this food item.</p>
//             )}
            
//             {error && <div className="error">{error}</div>}

//             <form onSubmit={handleSubmit}>
//                 <h4>Add a Review</h4>
//                 <label>
//                     Rating:
//                     <select
//                         value={rating}
//                         onChange={(e) => setRating(e.target.value)}
//                         required
//                     >
//                         <option value="" disabled>Select a rating</option>
//                         {[1, 2, 3, 4, 5].map((value) => (
//                             <option key={value} value={value}>{value}</option>
//                         ))}
//                     </select>
//                 </label>
//                 <label>
//                     Comment:
//                     <textarea
//                         value={comment}
//                         onChange={(e) => setComment(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <button type="submit" disabled={loading}>
//                     {loading ? "Submitting..." : "Submit Review"}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Reviews;
