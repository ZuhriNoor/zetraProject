import React from "react";
import "../styles/Services.css";
import Layout from "../components/Layout/Layout";

const Services = () => {
    
    return (
        <Layout title={"Zetra"}>
        <div className="services">
            <div className="div">
                <img className="vector" alt="Vector" src="vector.svg" />
                <img className="solar-bag-outline" alt="Solar bag outline" src="solar-bag-4-outline.svg" />
                <div className="group">
                    <div className="overlap-group">
                        <img className="game-icons-upgrade" alt="Game icons upgrade" src="game-icons-upgrade.svg" />
                    </div>
                </div>
                <div className="fluent-phone-laptop-wrapper">
                    <img className="fluent-phone-laptop" alt="Fluent phone laptop" src="fluent-phone-laptop-20-regular.svg" />
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
};
export default Services;