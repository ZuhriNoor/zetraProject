import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Prices } from "../components/Prices";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import "../styles/Products.css";
import { Collapse, Select, Radio } from "antd";

const { Option } = Select;
const { Panel } = Collapse;

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
    // eslint-disable-next-line
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
    // eslint-disable-next-line
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) {
      getAllProducts();
    }
    // eslint-disable-next-line
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) {
      filterProduct();
    }
    // eslint-disable-next-line
  }, [checked, radio]);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filters`,
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyNow = (product) => {
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success("Item Added to cart");
    navigate("/cart");
  };

  return (
    <Layout title={"All Products - Best offers "}>
      <div className="container-fluid row mt-3 mb-5">
        <div className="col-md-2 product-filter-box">
          <div className="d-flex flex-column m-2">
          <Collapse accordion>
            <Panel header="Filter By Category" key="1">
              <div className="d-flex flex-column m-2">
                <Select
                  mode="multiple"
                  placeholder="Select Categories"
                  style={{ width: "100%" }}
                  onChange={(values) => setChecked(values)}
                >
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
              </div>
            </Panel>
            </Collapse>
            </div>
            <div className="d-flex flex-column m-2">
            <Collapse accordion>
            <Panel header="Filter By Price" key="2">
              <div className="d-flex flex-column m-2">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>
            </Panel>
          </Collapse>
          </div>

          <div className="d-flex flex-column">
            <button
              className="btn btn-danger products-btn"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <hr className="products-line"/>
        <div className="col-md-9 products-list">
          <h1 className="text-center products-title">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div
                className="card m-2 products-card"
                key={p._id}
                onClick={() => navigate(`/product/${p.slug}`)}
              >
              <div className="products-image-container">
              <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top mx-auto"
                  alt={p.name}
                  style={{ width: "10rem", height: "10rem" }}
                />
              </div>
                
                <div className="card-body products-card-body">
                  <h5 className="card-title products-card-title">{p.name}</h5>
                  <p className="card-text products-card-text">{p.description.substring(0, 50)}...</p>
                  <p className="card-text"> ₹ {p.price}</p>
                  <button
                    className="btn btn-primary ms-1 products-btn-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyNow(p);
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    className="btn btn-secondary ms-1 products-btn-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCart([...cart, p]);
                      localStorage.setItem("cart", JSON.stringify([...cart, p]));
                      toast.success("Item Added to cart");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
