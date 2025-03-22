import './App.css';
import Products from './Components/Products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products />} />
      {/* <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} /> */}
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
