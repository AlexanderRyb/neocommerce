import React from 'react'


function ProductCard(image, description, price) {
  return (
<div className="product-card">
      <img src={image} alt={description} />
      <h3>{description}</h3>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>  )
}

export default ProductCard