import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
import axios from "axios";

// Utility function to fetch products
const getAllProducts = async (page) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
    );
    return data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const banners = [
    "/images/Banner2.jpg",
    "/images/Banner1.jpg",
  ];

  const bannerStyles = {
    fontFamily: "Georgia, serif",
    marginBottom: "50px",
  };

  return (
    <Layout title={"Zetra"}>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ZETRA</title>
        <div id="banner" className="banner-container" style={bannerStyles}>
          {banners.length > 0 ? (
            <Slider
              dots={true}
              infinite={true}
              speed={800}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
            >
              {banners.map((banner, index) => (
                <img key={index} src={banner} alt={`Banner Image ${index + 1}`} />
              ))}
            </Slider>
          ) : (
            <p>No banners to display.</p>
          )}
        </div>

        <div className="featured-products-container text-center">
          <h1 className="featured-products-heading">Featured Products</h1>
          {/* Add your featured products here */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
