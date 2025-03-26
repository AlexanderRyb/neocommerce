import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

function Navigation() {
  return (

    <nav className="nav-container">
    <div className="nav-group">
      <Link to="/login" className="nav-link">Login</Link>
    </div>
    
    <div className="nav-group">
      <Link to="/" className="nav-link">Products</Link>
      <Link to="/cart" className="nav-link">Cart</Link>
      <Link to="/wishlist" className="nav-link">Wishlist</Link>
    </div>
  </nav>
  )
}

export default Navigation