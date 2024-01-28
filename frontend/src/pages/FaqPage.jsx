// faqpage.jsx

import React, { useState } from "react";
import Faqs from "./Faqs"; // Import the Faqs array
import "../styles/Faq.css";
import { Rectangle } from "./Rectangle";
import Layout from "../components/Layout/Layout";

const FaqPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <Layout title={"FAQ"}>
        <section className="faq-section">
          <div className="container">
            <div className="row">
              {/* ***** FAQ Start ***** */}
              <div className="col-md-6 offset-md-3">
                
                <div className="faq-title text-center pb-3">
                    <h2>Support &amp; FAQs</h2></div>
              </div>
              <div className="col-md-6 offset-md-3">
                <div className="faq" id="accordion">
                  {Faqs.map((faq, index) => (
                    <div className="card" key={index}>
                      <div
                        className={`card-header ${
                          activeIndex === index ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(index)}
                      >
                        <h5 className="mb-0">
                          <button className="faq-title">
                            {/* Remove the <span> with the badge */}
                            {faq.question}
                          </button>
                        </h5>
                      </div>
                      <div
                        className={`collapse ${
                          activeIndex === index ? "show" : ""
                        }`}
                      >
                        <div className="card-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  };
  
  export default FaqPage;