/* Services.jsx */
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Layout from "../components/Layout/Layout";
import "../styles/Services.css";

export default function Services() {
  return (
    <Layout title={"Zetra"}>
      <h1 className="service-title">Choose your required service</h1>
      <div className="services-page">
        <div className="card-container">
          {/* Use Link component instead of anchor tags */}
          <Link to="/services/repair" className="card-link">
            <div className="card">
              <div className="wrapper">
              <img src="/images/CARDBG.jpg"  className="cover-image" style={{width:"300px",margin:"0rem",height:"400px"}} alt="Cover" />
              </div>
              <h1 className="title pb-2" style={{color:"black"}}alt="Title" >Repair </h1>
              <img src="/images/repair.png"  className="character" alt="Character" />
            </div>
          </Link>
          {/* Use Link component instead of anchor tags */}
          <Link to="/services/upgrade" className="card-link">
            <div className="card">
              <div className="wrapper">
                <img src="/images/CARDBG.jpg" className="cover-image" style={{width:"300px",margin:"0rem",height:"400px"}} alt="Cover" />
              </div>
              <h1 className="title pb-2" style={{color:"black"}}alt="Title" >Upgrade</h1>
              <img src="/images/UPGRADE.png"  className="character" alt="Character" />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
