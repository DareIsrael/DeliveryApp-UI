import React from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Import phone icon
import "./Services.css"; // External CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-header">Reach out to us for your 👇</h2>
      <ul className="services-list">
        <li>DSTV Installation and Subscription</li>
        <li>GOTV Installation and Subscription</li>
        <li>Showmax Subscription</li>
        <li>CCTV Installation</li>
      </ul>
      <div className="contact-section">
        <a href="tel:09164633598" className="call-link">
          <FaPhoneAlt className="call-icon" /> 09164633598
        </a>
      </div>
    </div>
  );
};

export default Services;
