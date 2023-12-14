import React from "react";
import "../styles/Help.css";
import Layout from "../components/Layout/Layout";

const Help = () => {

    return (
        <Layout title={"Help"}>
        <div className="help">
            <div className="div">
                <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                    <div className="text-wrapper">Name</div>
              
                    <div className="text-wrapper-2">Email</div>
                 
                    <div className="text-wrapper-3">Phone Number</div>
                    <div className="text-wrapper-4">Description</div>
                   
                </div>
                <img className="iconoir-nav-arrow" alt="Iconoir nav arrow" src="iconoir-nav-arrow-left.svg" />
                <div className="overlap">
                    <div className="logo-here">
                        Logo
                        <br />
                        Here
                    </div>
                </div>
                <p className="or-you-can-chat-with">
                    <span className="span">or you can </span>
                    <span className="text-wrapper-5">chat</span>
                    <span className="span"> with us!!!</span>
                </p>
                <div className="text-wrapper-6">Help</div>
            </div>
        </div>
        </Layout>
    );
};
export default Help;
