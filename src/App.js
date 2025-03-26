import './App.css';
import { CommerceProvider } from './Context/CommerceContext';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';

function App() {
  return (
    <CommerceProvider>

    <BrowserRouter>
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


   
  );
}

export default App;
