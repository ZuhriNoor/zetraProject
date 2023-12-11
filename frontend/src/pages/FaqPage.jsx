import React from "react";
import { Rectangle } from "./Rectangle";
import "../styles/Faq.css";

const FaqPage = () => {
    return (
        <div className="faq">
            <div className="rectangle-wrapper">
                <div className="rectangle-2">
                    <Rectangle className="property-default" property1="default" />
                    <Rectangle className="property" property1="variant-2" />
                </div>
            </div>
        </div>
    );
};
export default FaqPage;
