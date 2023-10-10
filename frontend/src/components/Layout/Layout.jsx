import React from "react";
import Footer from "./Footer";
import {Toaster} from "react-hot-toast";
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div>
        <Toaster/>
        <Navbar />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </div>
  );
}
