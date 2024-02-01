// Home.jsx

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Layout/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Categories from "./Categories";  // Import Categories component
import "../styles/Home.css";

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
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
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
          <Categories />
          <Slider {...productCarouselSettings}>
            {products.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product.slug}`}
                className="text-decoration-none"
              >
                <div className="card m-2 home-card">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                    className="card-img-top mx-auto home-card-img"
                    alt={product.name}
                  />
                  <div className="card-body home-card-body">
                    <h5 className="card-title home-card-title">{product.name}</h5>
                    <p className="card-text home-card-text">{product.description.substring(0, 30)}...</p>
                    <p className="card-text home-card-text"> ₹ {product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
      <footer className="footer-container bg-dark mt-5">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>Email: info@zetra.com</p>
        <p>Phone: +1 123 456 7890</p>
        {/* Add more contact details as needed */}
      </div>
      <div className="additional-info">
        <h2>Additional Information</h2>
        <p>About Us</p>
        <p>Terms and Conditions</p>
        {/* Add more links or information as needed */}
      </div>
    </footer>
    </Layout>
  );
};

export default Home;
