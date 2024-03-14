import CustomerReviewCard from "./CustomerReviewCard";
import "./styles.css"


const Carousel = ({ reviewsArray }) => {
    return (
      <div className="review-container">
        <div className="glass-1"></div>
       {reviewsArray.map((review) => {
         return (
           <CustomerReviewCard
             key={review.reviewId}
             reviewStars={review.customerRating}
             customerName={review.customerName}
             reviewMessage={review.customerMessage}
           />)
       })}
       <div className="glass-2"></div>
     </div>
    
    );
};


export default Carousel;