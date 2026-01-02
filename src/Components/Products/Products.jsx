import React from 'react'
import './styles.css'
import { useSearch } from "../../Context/SearchContext";
import ProductCard from '../ProductCard/ProductCard'

export default function Products() {

  const { filteredProducts } = useSearch();
  const { setSelectedCategory } = useSearch();
const { minPrice, maxPrice, setMinPrice, setMaxPrice } = useSearch();
  const categories = ["all", "PC", "phone", "tablet", "tv", "laptop"];
  

  
  return (
    <div className='products-component-container'>
       
    
      <div className='categories-row'>
      {categories.map((cat) => (
        <button key={cat} onClick={() => setSelectedCategory(cat)}>
          {cat}
        </button>
      ))}
      </div>
     
      <div className='main-content-row'>
    <div className="price-filter">
      <div className="price-range">
      <input
        type="number"
        placeholder="Min price"
          value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <span className="dash">–</span>
      <input
        type="number"
        placeholder="Max price"
          value={maxPrice}

        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      </div>
      <div className="range-slider">
    <input
      type="range"
      min={0}
      max={100000}
      value={minPrice}
      onChange={e => setMinPrice(Math.min(+e.target.value, maxPrice))}
    />
    <input
      type="range"
      min={0}
      max={100000}
      value={maxPrice}
      onChange={e => setMaxPrice(Math.max(+e.target.value, minPrice))}
    />
  </div>
      
    </div>

    <div className='products-grid'>
   {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
   </div> 



    </div>
      
    
    </div>
  )
}
