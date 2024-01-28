import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="searchButton"
        style={{
          marginRight: '1px',
          padding: '1px',
          fontSize: '13px',
          verticalAlign: 'middle',
          textIndent: '20px',
        }}
        value={values.keyword}
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="searchButton"
        style={{ padding: '10px', fontSize: '10px' }}
        onClick={handleSubmit}
      >
        {/* Provide the image source directly */}
        <img
          src="/images/search.png"
          alt="Search"
          style={{ width: '15px', height: '15px' }}
        />
      </button>
    </div>
  );
};

export default SearchInput;
