import React, { useState } from "react";
import { useAuth } from "../context/auth";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Input, Select } from "antd";
import "../styles/Repair.css";
const { Option } = Select;

const Upgrade = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [phone, setPhone] = useState("");

  var categories = ["Phone", "Tablet", "Laptop", "Computer", "Gaming Console"];

  const handleUpgradeRequest = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        category: selectedCategory,
        model,
        description,
        phone,
      };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/create-upgrade-request`,
        formData
      );
      if (!data?.success) {
        toast.error(data?.message);
      } else {
        toast.success(
          "Upgrade Request Sent Successfully. A customer executive will contact you shortly."
        );
      }
    } catch (error) {
      console.log("Error submitting repair request:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Zetra - Repair"}>
      
      <div className="Repair">
      <div className="container">
        <h1>Upgrade Request</h1>
        <label>Category: </label>
        <Select
          placeholder="Select a category"
          onChange={(value) => setSelectedCategory(value)}
          style={{ width: "100%", marginBottom: "16px" }}
          required
        >
          {categories.map((option, id) => (
            <Option key={id} value={option}>
              {option}
            </Option>
          ))}
        </Select>

        <label>Model: </label>
        <Input
          type="text"
          placeholder="Enter Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
        <div className="mb-3">
          <label>Description: </label>
          <Input
            value={description}
            placeholder="Describe the issue"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Contact Number: </label>
          <Input
            type="text"
            placeholder="Enter Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          {auth?.token ? (
            <button className="btn btn-primary" onClick={handleUpgradeRequest}>
              SUBMIT UPGRADE REQUEST
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() =>
                        navigate("/login", {
                          state: "/services/upgrade",
                        })
                      }>
              Login before submitting request
            </button>
          )}
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Upgrade;
