import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../styles/AdminMenu.css";

const AdminMenu = () => {
  return (
    <div className="adminmenu">
    <div className="text m-3">
      <h1 className="me-md-auto">Admin Panel</h1>
      <div className="list-group d-flex flex-row">
        
        <NavLink
          to="/dashboard/admin/create-category"
          className="nav-link"
          activeClassName="active"
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="nav-link"
          activeClassName="active"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="nav-link"
          activeClassName="active"
        >
          Products
        </NavLink>
        <div className="dropdown">
          <NavLink
            to="/dashboard/admin/orders"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Orders
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/dashboard/admin/orders">
                Purchase Orders
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/dashboard/admin/sellorders">
                Sell Orders
              </Link>
            </li>
          </ul>
          
        </div>
        
        <NavLink
            to="/dashboard/admin/help"
            className="nav-link"
            activeClassName="active"
          >
            Help Requests
          </NavLink>
      </div>
    </div>
    </div>
  );
};

export default AdminMenu;
