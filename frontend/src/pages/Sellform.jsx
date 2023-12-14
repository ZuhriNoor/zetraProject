import React from "react";
import "../styles/Sellform.css";
import Layout from "../components/Layout/Layout";

const Sellform = () => {
    return (
        <Layout title={"Sell"}>
        <div className="sellform">
            <div className="div">
                <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                    <div className="text-wrapper">Brand</div>
                    <div className="text-wrapper-2">Model</div>
                    <div className="text-wrapper-3">Specification</div>
                    <div className="text-wrapper-4">Description</div>
                </div>
                <div className="text-wrapper-5">Condition:</div>
                <div className="text-wrapper-6">Working</div>
                <div className="text-wrapper-7">Not Working</div>
                <div className="text-wrapper-8">Include Some Details</div>
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="overlap">
                    <img className="img" alt="Rectangle" src="rectangle-33.svg" />
                    <img className="vector" alt="Vector" src="vector.svg" />
                    <div className="upload-images">
                        Upload
                        <br />
                        Images
                    </div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper-9">Submit</div>
                </div>
                <div className="overlap-2">
                    <p className="ZECTRA">
                        <span className="span">Z</span>
                        <span className="text-wrapper-10">EC</span>
                        <span className="text-wrapper-11">TR</span>
                        <span className="text-wrapper-12">A</span>
                    </p>
                    <img className="group" alt="Group" src="group-23.png" />
                </div>
            </div>
        </div>
        </Layout>
    );
};
export default Sellform;
