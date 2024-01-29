import React from "react";
import { NavLink, Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
          Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="dropdown-toggle list-group-item list-group-item-action"
            data-bs-toggle="dropdown"
          >
            Orders
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/dashboard/admin/orders">Purchase Orders</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/dashboard/admin/sellorders">Sell Orders</Link>
            </li>
          </ul>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;