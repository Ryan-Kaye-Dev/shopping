import Button from "./Button";

const ProductCard = ({id, title, price, description, image }) => {
  return (
    <>
        <div className="product-card">
            <h3>{title}</h3>
            <img className="product-image" src={image} alt={title} />
            <p className="product-price">Price: ${price}</p>
            <input className="product-input" type="number" placeholder="Quantity" />
            <Button className="add-to-cart-button" label="ADD TO CART" />
        </div>
    </>
  );
};
export default ProductCard;
