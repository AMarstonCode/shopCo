import "./styles.css";
import ViewAllButton from "../THalsell/ViewAllButton";
import ProductCard from "../THalsell/ProductCard";

const BuySection = ({ title, cardsArray }) => {
  return (
    <div className="buy-section-container">
      <h2>{title}</h2>
      {
        // Map over the array of card objects and create a new Card component for each one
        cardsArray.map((card) => {
          return (
            <ProductCard
              key={card.productId}
              productImage={card.productImage}
              productName={card.productName}
              productPrice={card.productPrice}
            />
          );
        })
      }
      <div className="cards-list"></div>
      <ViewAllButton />
    </div>
  );
};

export default BuySection;
