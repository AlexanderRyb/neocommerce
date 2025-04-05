import React from 'react'
import './styles.css'
import { useContextStore } from "../../Context/CommerceContext"; 


const Wishlist = () => {
  const { wishlist } = useContextStore();

  if (wishlist.length === 0) {
    return <p>Your wishlist is empty.</p>;
  }

  return (
    <div className="wishlist-view">
      {wishlist.map((item, index) => (
        <div key={index} className="wishlist-item">
          <img src={item.image} alt={item.description} className="wishlist-img" />
          <div className="wishlist-details">
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;