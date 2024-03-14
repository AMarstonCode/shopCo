import CustomerReviewCard from "./CustomerReviewCard";
import "./styles.css"

const Carousel = ({cardsArray}) => {
    return (
        <div className="carousel">
            {cardsArray.map((card) => {
                return <CustomerReviewCard  key={card.reviewId} reviewMessage={card.customerMessage} reviewStars={card.customerRating} customerName={card.customerName}/>
            })}

        </div>
    );
};

export default Carousel;