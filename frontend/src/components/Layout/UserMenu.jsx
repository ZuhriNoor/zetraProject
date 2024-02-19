import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../styles/UserMenu.css"; // Import the CSS file for UserMenu

const UserMenu = () => {
  return (
    <div className="user-menu m-3">
      <div className="text">
      <h4>Dashboard</h4>
        <div className="list-group m-3" style={{ width: "10rem"}}>
          
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action" 
            activeClassName="active" 
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="dropdown-toggle list-group-item list-group-item-action"
            data-bs-toggle="dropdown"
            activeClassName="active"
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
