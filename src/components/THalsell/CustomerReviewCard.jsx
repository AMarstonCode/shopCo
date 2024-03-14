import ReviewStar from "./reviewstar.svg"
import "./styles.css"

const CustomerReviewCard = ({reviewStars, reviewMessage, customerName}) => {
    const multiplyStars = (numberOfStars) => {
        const starsArray = []
        for (let i = 0; i < numberOfStars; i++) {
          starsArray.push(<img src={ReviewStar} />)
        }
        return starsArray
    }
    return (
        <div>
        <div class="customer-review-card">
  <div class="customer-review-header">
    <div class="review-stars">
      {multiplyStars(reviewStars)}
    </div>
    <span class="customer-name">{customerName}</span>
    <span class="green-checkmark">&#10003;</span>
  </div>
  <div class="customer-review-message">
    {reviewMessage}
  </div>
</div>
        </div>
    );
};

export default CustomerReviewCard;