import React from 'react'
const Searchbar = ({ onSearch }) => {
    return (
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  };
  
  export default Searchbar;