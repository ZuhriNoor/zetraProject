// Home.jsx

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import axios from "axios";

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
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const banners = [
    "/images/Banner2.jpg",
    "/images/Banner1.jpg",
  ];

  const bannerStyles = {
    fontFamily: "Georgia, serif",
    marginBottom: "50px",
  };

  const productCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5, // Display 5 products at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const initialProducts = await getAllProducts(page);
      const featured = initialProducts.slice(0, 5);
      setFeaturedProducts(featured);
      setProducts(initialProducts);
    };

    fetchProducts();
  }, [page]);

  return (
    <Layout title={"Zetra"}>
      <div>
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
          <Slider {...productCarouselSettings}>
            {products.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product.slug}`}
                className="text-decoration-none"
              >
                <div className="card m-2" style={{ width: "18rem", height:"20rem", margin: "0 10px" }}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top mx-auto" // Apply mx-auto class for centering
                    alt={product.name}
                    style={{ width: "10rem", height: "10rem" }}
                  />
                  <div className="card-body" style={{ width: "15rem", height:"5rem" }}>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description.substring(0, 30)}...</p>
                    <p className="card-text"> ₹ {product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
