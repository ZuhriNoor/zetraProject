import React from 'react';
import Sellform from './pages/Sellform';
import Products from './pages/Products';
import FaqPage from './pages/FaqPage';
import Services from './pages/Services';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails'; 
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Services/>
      

      <div>
       
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} /> 
        <Route path="/sell" element={<Sellform/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/FaqPage" element={<FaqPage/>} />
        <Route path="/product/:id" component={ProductDetails} />
        </Routes>
      </div>
    </Router>
  );
}
