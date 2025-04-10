import React from 'react'
import './styles.css'
import { useSearch } from "../../Context/SearchContext";
import ProductCard from '../ProductCard/ProductCard'

export default function Products() {

  const { filteredProducts } = useSearch();
  const { setSelectedCategory } = useSearch();
  const { setMinPrice, setMaxPrice } = useSearch();
  const categories = ["all", "PC", "phone", "tablet", "tv", "laptop"];

  
  return (
    <div className='product-grid'>
        <div className="price-filter">
      <input
        type="number"
        placeholder="Min price"
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Max price"
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
    </div>
    
      <div className='categories-row'>
      {categories.map((cat) => (
        <button key={cat} onClick={() => setSelectedCategory(cat)}>
          {cat}
        </button>
      ))}
      </div>
     
   
     
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
