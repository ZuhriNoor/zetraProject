import React from "react";
import FaqItem from "./FaqItem";
import Faqs from "./Faqs";
import Layout from "../components/Layout/Layout";
import "../styles/Faq.css";

function FaqPage() {
  return (
    <Layout>
      <div className="faq-page">
        <div className="faq-box">box</div>
        <h1 className="top-heading">Support & FAQs</h1>

        <div className="faq-list">
          {Faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FaqPage;
