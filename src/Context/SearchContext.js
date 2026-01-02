import { createContext, useContext, useState,useEffect  } from "react";
import  productList from "./productList.json";

const SearchContext = createContext();


export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const [filteredProducts, setFilteredProducts] = useState(productList);
  useEffect(() => {
    let filtered = productList;
  
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
  
    filtered = filtered.filter(product =>
      product.price >= minPrice && product.price <= maxPrice
    );
  
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, minPrice, maxPrice]);
  

  return (
    <SearchContext.Provider
      value={{
        filteredProducts,
        setSearchTerm,
        setSelectedCategory,
        setMinPrice,
        setMaxPrice,
        minPrice,
        maxPrice,
        
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);