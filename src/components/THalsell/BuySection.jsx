import "./styles.css"
import ViewAllButton from "../THalsell/ViewAllButton";
import ProductCard from "./ProductCard";

const BuySection = ({ title, cardsArray }) => {
    return (
        <div className="buy-section-container">
        <h2>{title}</h2>
        <div className="cards-list">
            {cardsArray.map((card) => {
                return <ProductCard productImage={card.productImage} productPrice={card.productPrice} productName={card.productName} key={card.productId} />
            })}
        </div>
        <ViewAllButton />
        </div>
    );
};

export default BuySection