import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import "../styles/Category.css"; // Import the CSS file

const Categories = () => {
  const categories = useCategory();
  return (
    <div className="container">
      <div className="row category-container">
        {categories.map((c) => (
          <div className="col-md-3 m-3 gx-3 gy-3 category-item" key={c._id}>
            <Link to={`/category/${c.slug}`} className="btn btn-primary category-link" style={{width: "100px"}}>
              {c.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
