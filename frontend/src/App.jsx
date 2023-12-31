import React from "react";
import { Route, Routes } from "react-router-dom";
import Sellform from "./pages/Sellform";
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
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Products from "./pages/Admin/Products";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";

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
        </Route>
        <Route path="/productsold" element={<Productsold />} />
        <Route path="/sell" element={<Sellform />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/services" element={<Services />} />

        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}
