import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import "../styles/Category.css"; // Import the CSS file

const Categories = () => {
  const categories = useCategory();
  return (
    <div className="container category-container1">
      <div className="row category-container">
        {categories.map((c) => (
          <div className="col-md-3 category-item" key={c._id}>
            <Link to={`/category/${c.slug}`} className="btn btn-primary category-link">
              {c.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
