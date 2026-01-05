import React from "react";
import "./styles.css";
import { ShoppingCart, Heart } from "lucide-react";
import { useContextStore } from "../../Context/CommerceContext";

const ProductCard = ({ image, description, price }) => {
  const { cart, setCart, wishlist, setWishlist, updateUserData, user } =
    useContextStore();

  const product = { image, description, price };

  const handleAddToCart = async () => {
    if (!user) {
      alert("Please log in to add items to your cart.");
      return;
    }

    let updatedCart;
    if (cart.some((item) => item.description === product.description)) {
      // Remove item from cart if already added
      updatedCart = cart.filter(
        (item) => item.description !== product.description
      );
    } else {
      // Add item to cart if not already there
      updatedCart = [...cart, product];
    }

    setCart(updatedCart);
    await updateUserData("cart", updatedCart);
  };

  const handleAddToWishlist = async () => {
    if (!user) {
      alert("Please log in to add items to your wishlist.");
      return;
    }

    let updatedWishlist;
    if (wishlist.some((item) => item.description === product.description)) {
      // Remove item from wishlist if already added
      updatedWishlist = wishlist.filter(
        (item) => item.description !== product.description
      );
    } else {
      // Add item to wishlist if not already there
      updatedWishlist = [...wishlist, product];
    }

    setWishlist(updatedWishlist);
    await updateUserData("wishlist", updatedWishlist);
  };

  return (
    <div className="product-card">
      <img src={image} alt={description} />
      <h3>{description}</h3>
      <div className="card-footer">
        <p className="price">${price}</p>

        <div className="buttons">
          <button onClick={handleAddToCart}>
            <ShoppingCart
              className={
                cart.some((item) => item.description === product.description)
                  ? "in-cart"
                  : "not-in-cart"
              }
            />
          </button>
          <button onClick={handleAddToWishlist}>
            <Heart
              className={
                wishlist.some(
                  (item) => item.description === product.description
                )
                  ? "in-wishlist"
                  : "not-in-wishlist"
              }
              fill={
                wishlist.some(
                  (item) => item.description === product.description
                )
                  ? "red"
                  : "none"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
