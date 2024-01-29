import React from "react";
import { NavLink, Link } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="dropdown-toggle list-group-item list-group-item-action"
            data-bs-toggle="dropdown"
          >
            Orders
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/dashboard/user/orders">Purchase Orders</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/dashboard/user/sellorders">Sell Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
