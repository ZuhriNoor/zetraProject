// Services.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Services.css";
import Layout from "../components/Layout/Layout";

const Services = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  const handleBookNow = () => {
    if (selectedCategory) {
      // Redirect to the respective page based on the selected category
      navigate(`/services/${selectedCategory.toLowerCase()}`);
    } else {
      // Display an alert or handle the case where no category is selected
      alert("Please select a category before booking.");
    }
  };

  return (
    <Layout title={"Zetra"}>
      <div className="services">
        {/* ... (existing JSX) */}

        {/* Add category selection buttons (update as needed) */}
        <div className="category-buttons">
          <button
            className={`category-button ${selectedCategory === "Repair" ? "selected" : ""}`}
            onClick={() => handleCategorySelection("Repair")}
          >
            Repair
          </button>
          <button
            className={`category-button ${selectedCategory === "Upgrade" ? "selected" : ""}`}
            onClick={() => handleCategorySelection("Upgrade")}
          >
            Upgrade
          </button>
          {/* Add more buttons for other categories as needed */}
        </div>

        {/* "Book Now" button */}
        <div className="book-now-container">
          <button className="book-now-button" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
