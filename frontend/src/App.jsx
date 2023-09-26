import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sellform from './pages/Sellform';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails'; // Import the ProductDetails component
import Home from './pages/Home'

export default function App() {
  return (
    <Router>
      
      <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} /> 
        <Route path="/sell" element={<Sellform/>} />
        <Route path="/product/:id" component={ProductDetails} />
        </Routes>
      </div>
      
    </Router>
  );
}
