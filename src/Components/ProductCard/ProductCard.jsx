import React from 'react'
import './styles.css'


import { useAuth } from "../../Context/CommerceContext"; 


const ProductCard = ({ image, description, price }) => {
  const { cart, setCart, updateUserData, user } = useAuth();

  const handleAddToCart = async () => {
    if (!user) {
      alert("Please log in to add items to your cart.");
      return;
    }

    const newProduct = { image, description, price };
    const updatedCart = [...cart, newProduct];
    setCart(updatedCart);
    console.log("added to cart")
    await updateUserData("cart", updatedCart);
  };

  return (
    <div className="product-card">
      <img src={image} alt={description} />
      <h3>{description}</h3>
      <p>{price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
