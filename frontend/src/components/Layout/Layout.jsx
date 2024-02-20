import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import "../../styles/CustomScrollbar.css";
import "../../styles/Layout.css"

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div className="layout-main">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
        </Helmet>
      <Header />
      <main style={{ minHeight: "90vh", overflow: "hidden" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;