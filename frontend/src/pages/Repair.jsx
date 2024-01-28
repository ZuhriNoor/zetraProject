import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Select } from "antd";
const { Option } = Select;

const Repair = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  // You can modify the category options based on your requirements
  const categoryOptions = [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    // Add more categories as needed
  ];

  const handleRepairRequest = async () => {
    try {
      // Add your logic to send repair request
      // Use the selectedCategory, description, and photo in the request

      // Example request using axios
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/repair/create-repair-request`,
        {
          category: selectedCategory,
          description,
          photo,
        }
      );

      if (response.data.success) {
        toast.success("Repair request submitted successfully!");
        // You can redirect the user to a confirmation page or dashboard
        navigate("/confirmation");
      } else {
        toast.error("Failed to submit repair request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting repair request:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <Layout title={"Zetra - Repair"}>
      <div className="container">
        <h1>Product Repair Request</h1>
        <Select
          placeholder="Select a category"
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
          style={{ width: "100%", marginBottom: "16px" }}
        >
          {categoryOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <div className="mb-3">
          <textarea
            value={description}
            placeholder="Describe the issue"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="btn btn-outline-secondary col-md-12">
            {photo ? photo.name : "Upload Photo"}
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              hidden
            />
          </label>
        </div>
        <div className="mb-3">
          {photo && (
            <div className="text-center">
              <img
                src={URL.createObjectURL(photo)}
                alt="repair_photo"
                height={"200px"}
                className="img img-responsive"
              />
            </div>
          )}
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" onClick={handleRepairRequest}>
            SUBMIT REPAIR REQUEST
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Repair;
