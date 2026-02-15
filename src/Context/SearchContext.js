import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

const API_URL = "https://n-commerce-server.onrender.com/products";

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams();

    if (searchTerm) params.append("q", searchTerm);
    if (selectedCategory !== "all") params.append("category", selectedCategory);
    if (minPrice !== null) params.append("min", minPrice);
    if (maxPrice !== Infinity) params.append("max", maxPrice);

    setLoading(true);

    fetch(`${API_URL}?${params.toString()}`)
      .then(res => res.json())
      .then(data => setFilteredProducts(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [searchTerm, selectedCategory, minPrice, maxPrice]);

  return (
    <SearchContext.Provider
      value={{
        filteredProducts,
        loading,

        searchTerm,
        setSearchTerm,

        selectedCategory,
        setSelectedCategory,

        minPrice,
        setMinPrice,

        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
