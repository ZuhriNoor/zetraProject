import React from "react";
import "../styles/Services.css";
import Layout from "../components/Layout/Layout";
const Services = () => {
  return (
    <Layout title={"Need Us?"}>
      <div className="service-page">
        <div className="container">
          <div className="box">box</div>
          <div className="box2">box</div>
        </div>
        <div className="item1">
          <h3>Repair</h3>
        </div>
        <div className="item2">
          <h3>Upgrade</h3>
        </div>
        <div className="text">
          <h1>Services</h1>
        </div>
      </div>
    </Layout>
  );
};
export default Services;
