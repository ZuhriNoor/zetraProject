import PropTypes from "prop-types";
import React from "react";
import "../styles/Rectangle.css";

export const Rectangle = ({ property1, className }) => {
    return (
        <div className={`rectangle ${property1} ${className}`}>
            {property1 === "default" && (
                <>
                    <div className="overlap">
                        <div className="text-wrapper">Search</div>
                        <img className="ri-search-line" alt="Ri search line" src="ri-search-line.svg" />
                    </div>
                    <div className="overlap-group">
                        <img className="line" alt="Line" src="line-10.svg" />
                        <div className="div" />
                        <img className="icon-plus" alt="Icon plus" src="icon-plus.png" />
                    </div>
                    <div className="overlap-2">
                        <img className="img" alt="Line" src="line-13.svg" />
                        <div className="div-2" />
                        <img className="icon-plus-2" alt="Icon plus" src="icon-plus-3.png" />
                    </div>
                    <div className="overlap-3">
                        <img className="line-2" alt="Line" src="line-15.svg" />
                        <img className="line-2" alt="Line" src="line-16.svg" />
                        <div className="div" />
                        <img className="icon-plus-3" alt="Icon plus" src="icon-plus-5.png" />
                    </div>
                    <div className="overlap-4">
                        <img className="line-3" alt="Line" src="line-24.svg" />
                        <img className="img-2" alt="Rectangle" src="rectangle-45.svg" />
                        <img className="icon-plus-4" alt="Icon plus" src="icon-plus-6.png" />
                    </div>
                    <div className="overlap-5">
                        <img className="line-4" alt="Line" src="line-14.svg" />
                        <div className="div" />
                        <img className="icon-plus-5" alt="Icon plus" src="icon-plus-4.png" />
                    </div>
                    <div className="overlap-6">
                        <img className="line-5" alt="Line" src="line-11.svg" />
                        <div className="div" />
                        <img className="icon-plus-3" alt="Icon plus" src="image.png" />
                    </div>
                    <div className="overlap-group-2">
                        <img className="line-6" alt="Line" src="line-12.svg" />
                        <div className="div" />
                        <img className="icon-plus-6" alt="Icon plus" src="icon-plus-2.png" />
                    </div>
                    <img className="iconoir-nav-arrow" alt="Iconoir nav arrow" src="iconoir-nav-arrow-left.svg" />
                    <div className="support-faqs">Support &amp; FAQs</div>
                    <div className="div-3" />
                </>
            )}
        </div>
    );
};

Rectangle.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
