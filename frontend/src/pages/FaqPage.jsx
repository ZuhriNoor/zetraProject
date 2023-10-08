
import React from "react";
import FaqItem from "./FaqItem"; 
import Faqs from "./Faqs";

import "../css/Faq.css"


function FaqPage() {
  return (

    <div className="faq-page">
        <div className="faq-box">box</div>
      <h1 className="top-heading">Support & FAQs</h1>
    
      <div className="faq-list">
        {Faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FaqPage;
