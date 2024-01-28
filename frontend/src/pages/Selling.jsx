import React from "react";
import Layout from "../components/Layout/Layout";

const Selling = () => {
  return (

    <Layout title={"Sell something"}>

    
      <div className="sell-main">
        <div className="sell-box-form">
          <div className="sell-input">
            <label htmlFor="brand">Brand</label>
            <input type="text" id="brand" placeholder="Enter Brand" />
          </div>
          <div className="sell-input">
            <label htmlFor="model">Model</label>
            <input type="text" id="model" placeholder="Enter Model" />
          </div>
          <div className="sell-input">
            <label htmlFor="spec">Specification</label>
            <input type="text" id="spec" placeholder="Enter Specification" />
          </div>
          <div className="sell-input">
            <label htmlFor="desc">Description</label>
            <textarea type="text" id="desc" placeholder="Enter Description" />
          </div>
        </div>
        <div className="sell-cond">
          <h6 htmlFor="condition">Condition: </h6>
          <div className="sell-cond-radio">
            <input type="radio" id="working" value={"working"} name="condition" />
            <label htmlFor="working">Working</label>
          </div>
          <div className="sell-cond-radio">
            <input type="radio" id="notworking" value={"notworking"} name="condition" />
            <label htmlFor="notworking">Not working</label>
          </div>
        </div>
      </div>
</Layout>
  );
};

export default Selling;
