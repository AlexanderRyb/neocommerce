import './App.css';
import { CommerceProvider } from './Context/CommerceContext';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashRouter } from "react-router-dom";

import Layout from './Components/Layout';
import { SearchProvider } from "./Context/SearchContext";


function App() {
  return (
    <SearchProvider>

    <CommerceProvider>
<HashRouter>
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<Products />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
    </Route>
  </Routes>
</HashRouter>

  </CommerceProvider>
  </SearchProvider>



   
  );
}

export default App;
