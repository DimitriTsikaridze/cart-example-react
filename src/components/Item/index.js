import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import "./item.css";

const Item = ({ itemData }) => {
  const { addToCart, removeFromCart } = useCart();
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    addToCart(itemData);
    setCount(count + 1);
  };

  const handleDeleteToCart = () => {
    if (count === 0) return;
    removeFromCart(itemData.id);
    setCount((v) => v - 1);
  };

  // Calculate the total price for this product
  const productTotalPrice = itemData.price * count;

  return (
    <div className="item">
      <div className="item-image">
        <img src={itemData.imgUrl} className="resp-img" alt={itemData.name} />
      </div>
      <p>
        <b>Name:</b>
        {itemData.name}
      </p>
      <div>
        <b>Description:</b>
        <p>{itemData.description}</p>
      </div>
      <p>
        <b>Price:</b>
        {itemData.price}$
      </p>
      <p>
        <input type="number" className="item-price" value={count} readOnly />
      </p>
      <p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </p>
      <p>
        <button onClick={handleDeleteToCart}>Delete Product</button>
      </p>
      <p>Product total price: ${productTotalPrice}</p>
    </div>
  );
};

export default Item;
