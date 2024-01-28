import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import "../../styles/CustomScrollbar.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
        </Helmet>
      <Header />
<<<<<<< HEAD
      <main style={{ minHeight: "85vh" }}>
        

=======
      <main style={{ minHeight: "90vh", overflow: "hidden" }}>
>>>>>>> d06a3ed7c7488ec03b029a3c432f61fd6f54303f
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;