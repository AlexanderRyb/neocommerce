import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import { User } from "lucide-react";
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
      <Link to="/login" className="nav-link">
      <User></User>      
      </Link>
      <Link to="/" className="nav-link">Products</Link>
      <Link to="/cart" className="nav-link">Cart</Link>
      <Link to="/wishlist" className="nav-link">Wishlist</Link>
    </div>
  </nav>
  )
}

export default Navigation