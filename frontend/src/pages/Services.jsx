import React from "react";
import "../styles/Services.css";
import Layout from "../components/Layout/Layout";

export default function Services() {
  return (
    <Layout title={"Services"}>
      <div className="iphone">
        <div className="div">
          <img className="vector" alt="Vector" src="../../public/images/vector.svg" />
          <img
            className="solar-bag-outline"
            alt="Solar bag outline"
            src="../../public/images/solar-bag-4-outline.svg"
          />
          <div className="group">
            <div className="overlap-group">
              <img
                className="game-icons-upgrade"
                alt="Game icons upgrade"
                src="../../public/images/game-icons-upgrade.svg"
              />
            </div>
          </div>
          <div className="fluent-phone-laptop-wrapper">
            <img
              className="fluent-phone-laptop"
              alt="Fluent phone laptop"
              src="../../public/images/fluent-phone-laptop-20-regular.svg"
            />
          </div>
          <div className="text-wrapper">Services</div>
          <div className="overlap">
            <div className="text-wrapper-2">Book Now</div>
          </div>
          <div className="text-wrapper-3">Repair</div>
          <div className="text-wrapper-4">Upgrade</div>
          <div className="text-wrapper-5">Need help?</div>
        </div>
      </div>
    </Layout>
  );
}
