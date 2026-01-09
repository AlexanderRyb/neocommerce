import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import { User, Grid2x2, Heart, ShoppingCart } from "lucide-react";

import Searchbar from './Searchbar';
import { useSearch } from "../../Context/SearchContext";


function Navigation() {
  const { setSearchTerm } = useSearch();

  return (

    <nav className="nav-container">
        
    <div className="search-group">
    <Searchbar onSearch={setSearchTerm} />      
    </div>

    <div className="nav-group">
      <Link to="/login" className="nav-link" title="login">
      <User></User>      
      </Link>
      <Link to="/" className="nav-link" title="product list">
      <Grid2x2></Grid2x2>
      
      </Link>
      <Link to="/cart" className="nav-link" title="cart">      
      <ShoppingCart></ShoppingCart>
      </Link>
      <Link to="/wishlist" className="nav-link" title="wishlist">
      <Heart></Heart>
      </Link>
    </div>
  </nav>
  )
}

export default Navigation