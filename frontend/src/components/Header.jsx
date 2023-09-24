import React from 'react';
import '../css/Header.css'; // Import your CSS file

function Sidebar() {
  return (
    <div className="sidenav">
      <h2>Navigation</h2>
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/sell">Sell</a>
      <a href="#">Contact</a>
    </div>
  );
}

export default Sidebar;
