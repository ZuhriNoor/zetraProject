import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/Selling.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import axios from "axios";
import Checkbox from "antd/es/checkbox/Checkbox";

const Selling = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [isWorking, setIsWorking] = useState(false);
  const [isNotWorking, setIsNotWorking] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [spec, setSpec] = useState("");
  const [desc, setDesc] = useState("");
  const [condition, setCondition] = useState("");
  const [photo, setPhoto] = useState("");
  const [donate, setDonate] = useState(false);

  const handleWorkingChange = () => {
    setIsWorking(!isWorking);
    setIsNotWorking(false); // Uncheck "Not Working" when "Working" is checked
    setCondition("Working");
  };

  const handleNotWorkingChange = () => {
    setIsNotWorking(!isNotWorking);
    setIsWorking(false); // Uncheck "Working" when "Not Working" is checked
    setCondition("Not Working");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = new FormData();
      orderData.append("brand", brand);
      orderData.append("model", model);
      orderData.append("spec", spec);
      orderData.append("desc", desc);
      orderData.append("photo", photo);
      orderData.append("condition", condition);
      orderData.append("donate", donate);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/sell-order`,
        orderData
      );
      if (data?.success) {
        toast.error(data?.message);
        navigate("/dashboard/user/sellorders");
      } else {
        toast.success("Error in creating sell order");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Sell something"}>
      <div className="selling">
        <h1 className="selling-title">Sell Something</h1>
        <div className="sell-box-form">
          <label htmlFor="brand">Brand:</label>
          <div className="sell-input">
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Enter Brand"
              onChange={(e) => {
                setBrand(e.target.value);
              }}
              value={brand}
              required
            />
          </div>
          <label htmlFor="model">Model:</label>
          <div className="sell-input">
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Enter Model"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
              required
            />
          </div>
          <label htmlFor="spec">Specification:</label>
          <div className="sell-input">
            <input
              type="text"
              id="spec"
              name="spec"
              placeholder="Enter Specification"
              value={spec}
              onChange={(e) => {
                setSpec(e.target.value);
              }}
              required
            />
          </div>
          <label htmlFor="desc">Description:</label>
          <div className="sell-input">
            <textarea
              wrap="hard"
              type="text"
              id="desc"
              name="desc"
              placeholder="Enter Description"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="selling-second-box">
          <div className="selling-condition">
            <label>Condition:</label>
            <div className="selling-radio" onClick={handleWorkingChange}>
              <div className={`ellipse ${isWorking ? "checked" : ""}`}>
                {isWorking && <div className="checked-mark" />}{" "}
                {/* Custom checked mark */}
              </div>
              <span className="selling-radio-text">Working</span>
            </div>
            <div className="selling-radio" onClick={handleNotWorkingChange}>
              <div className={`ellipse-2 ${isNotWorking ? "checked" : ""}`}>
                {isNotWorking && <div className="checked-mark" />}{" "}
                {/* Custom checked mark */}
              </div>
              <span className="selling-radio-text">Not Working</span>
            </div>
          </div>
          <div className="">
            <label className="btn selling-upload col-md-12">
              {photo ? photo.name : "Upload Images"}
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                hidden
              />
              <img
                src="/images/camera.png"
                alt="icon"
                className="selling-cam-icon"
              />
            </label>
          </div>
        </div>
        <div className="">
          {photo && (
            <div className="text-center">
              <img
                src={URL.createObjectURL(photo)}
                alt="product_photo"
                height={"200px"}
                className="img img-responsive"
              />
            </div>
          )}
          <Checkbox
            style={{
              fontSize: "1.25rem",
              margin: "10px 0",
              fontFamily: "'Montserrat', sans-serif",
            }}
            onChange={(e) => {setDonate(e.target.checked)}}
          >
            I want to donate this
          </Checkbox>
        </div>
        {auth?.token ? (
          <button className="selling-btn" onClick={handleSubmit}>
            {donate ? "Donate" : "Submit order"}
          </button>
        ) : (
          <button
            className="selling-btn"
            onClick={() =>
              navigate("/login", {
                state: "/dashboard/user/sellorders",
              })
            }
          >
            Login to Sell
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Selling;
