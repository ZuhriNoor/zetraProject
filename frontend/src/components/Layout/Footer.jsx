import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer-container bg-dark mt-5">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Email: info@zetra.com</p>
          <p>Phone: +1 123 456 7890</p>
          {/* Add more contact details as needed */}
        </div>
        <div className="additional-info">
          <h2>Additional Information</h2>
          <p>About Us</p>
          <p>Terms and Conditions</p>
          {/* Add more links or information as needed */}
        </div>
      </footer>
      <div
        className="bg-dark text-light p-3"
        style={{ position: "relative", bottom: "0px", width: "auto" }}
      >
        <h6 className="text-center">All Rights Reserved &copy; Zetra 2023</h6>
      </div>
    </div>
  );
}
