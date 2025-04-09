import React from 'react'
import './styles.css'
import { useSearch } from "../../Context/SearchContext";
import ProductCard from '../ProductCard/ProductCard'

export default function Products() {

  const { filteredProducts } = useSearch();

  return (
    <div className='product-grid'>
     
     {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  )
}
