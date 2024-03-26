import React from "react";
import { Route, Routes } from "react-router-dom";
import Productsold from "./pages/Products";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Error from "./pages/Error";
import Services from "./pages/Services";
import Help from "./pages/Help";
import FaqPage from "./pages/FaqPage";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Users from "./pages/Admin/Users";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import SellOrders from "./pages/user/SellOrders";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Products from "./pages/Admin/Products";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminSellOrders from "./pages/Admin/AdminSellOrders"
import Repair from "./pages/Repair";
import Upgrade from "./pages/Upgrade";
import Selling from "./pages/Selling";
import HelpRequest from "./pages/Admin/HelpRequest";
import AdminRepair from "./pages/Admin/AdminRepair";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/sellorders" element={<SellOrders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/sellorders" element={<AdminSellOrders />} />
          <Route path="admin/help" element={<HelpRequest />} />
          <Route path="admin/repair" element={<AdminRepair />} />
        </Route>
        <Route path="/productsold" element={<Productsold />} />
        <Route path="/sell" element={<Selling />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/repair" element={<Repair />} />
        <Route path="/services/upgrade" element={<Upgrade />} />

        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
