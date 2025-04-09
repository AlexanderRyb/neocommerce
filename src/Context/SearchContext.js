import { createContext, useContext, useState } from "react";
import  productList from "./productList.json";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productList);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = productList.filter((product) =>
      product.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, filteredProducts, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);