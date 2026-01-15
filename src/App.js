import './App.css';
import { CommerceProvider } from './Context/CommerceContext';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import { SearchProvider } from "./Context/SearchContext";


function App() {
  return (
    <SearchProvider>

    <CommerceProvider>
    <BrowserRouter basename="/neocommerce">
    <Routes>
      <Route element={<Layout />} >
      <Route path="/" element={<Products />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Wishlist" element={<Wishlist />} />



      </Route>
    </Routes>
  </BrowserRouter>
  </CommerceProvider>
  </SearchProvider>



   
  );
}

export default App;
