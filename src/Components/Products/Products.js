import React from 'react'
import './styles.css'
import productList from './productList.json'
import ProductCard from '../ProductCard/ProductCard'

export default function Products() {
  return (
    <div>
          {productList.map(product => (
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
