import "./styles.css";
import ViewAllButton from "./ViewAllButton";
import ProductCard from "./ProductCard";

const BuySection = ({ title, cardsArray }) => {
  return (
    
       <div className="buy-section-container">
       <h2>{title}</h2>
       
      <div className="cards-list">
       {cardsArray.map((card) => {
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
       </div>
      <ViewAllButton />
    </div>
  );
};

export default BuySection;
