import React from 'react'
import './styles.css'


import { useContextStore } from "../../Context/CommerceContext"; 


const ProductCard = ({ image, description, price }) => {
  const { cart, setCart, wishlist, setWishlist, updateUserData, user } = useContextStore();

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

  
  const handleAddToWishlist = async () => {
    if (!user) {
      alert("Please log in to add items to your wishlist.");
      return;
    }
    const newWishlistProduct = { image, description, price };
    const updatedWishlist = [...wishlist, newWishlistProduct];
    setWishlist(updatedWishlist);
    await updateUserData("wishlist", updatedWishlist);
  };

  return (
    <div className="product-card">
      <img src={image} alt={description} />
      <h3>{description}</h3>
      <p>{price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleAddToWishlist}>Add to Wishlist</button>

    </div>
  );
};

export default ProductCard;
