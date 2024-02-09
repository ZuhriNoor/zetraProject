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
                <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className="cover-image" alt="Cover" />
              </div>
              <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" className="title" alt="Title" />
              <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" className="character" alt="Character" />
            </div>
          </Link>
          {/* Use Link component instead of anchor tags */}
          <Link to="/services/upgrade" className="card-link">
            <div className="card">
              <div className="wrapper">
                <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" className="cover-image" alt="Cover" />
              </div>
              <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" className="title" alt="Title" />
              <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" className="character" alt="Character" />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
