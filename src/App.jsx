import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
function App() {

  return (
    <Router>
      <title>Fashion++ Cloth Store</title>
      <Navbar />  
      <div className="container mt-3 ml-1 mr-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
