import './App.css';
import Products from './Components/Products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route element={<Layout />} >
      <Route path="/" element={<Products />} />

      </Route>
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
