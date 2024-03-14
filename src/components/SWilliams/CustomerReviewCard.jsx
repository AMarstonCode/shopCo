import ReviewStar from "./reviewstar.svg";
import "./styles.css";

const CustomerReviewCard = ({reviewStars, reviewMessage, customerName}) => {
   const multiplyStars = (numberOfStars) => {
    const starsArray = []
        for (let i = 0; i < numberOfStars; i++) {
            starsArray.push(<img key={i} className="star" src= {ReviewStar} />)
   }
        return starsArray
   }
    return (
        <div>
        <div className="customer-review-card">
  <div className="customer-review-header">
    <div className="review-stars">
       {multiplyStars(reviewStars)}
    </div>
    <span className="customer-name">{customerName}</span>
    <span className="green-checkmark">&#10003;</span>
  </div>
  <div className="customer-review-message">
    "{reviewMessage}"
  </div>
</div>
</div>
        
    );
};

export default CustomerReviewCard;