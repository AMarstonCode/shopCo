import "./styles.css";

const ProductCard = ({ productImage, productName, productPrice }) => {
  return (
    <>
      <div className="product-card">
        <img src={productImage} alt={productName} className="product-image" />
        <div className="product-details">
          <h3 className="product-name">{productName}</h3>
          <p className="product-price">${productPrice}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
