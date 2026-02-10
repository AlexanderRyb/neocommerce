import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

const API_URL = "https://YOUR_RENDER_URL/products";

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // 1. Fetch from backend when server-side filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategory !== "all") {
      params.append("category", selectedCategory);
    }
    if (minPrice !== null) params.append("min", minPrice);
    if (maxPrice !== null && maxPrice !== Infinity) {
      params.append("max", maxPrice);
    }

    fetch(`${API_URL}?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(console.error);
  }, [selectedCategory, minPrice, maxPrice]);

  // 2. Client-side text search only
  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product =>
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <SearchContext.Provider
      value={{
        filteredProducts,

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
