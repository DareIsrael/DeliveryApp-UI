import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="contact-title">Contact Us</h1>
        <p>
          At <strong>ElectroVault</strong>, your satisfaction is our priority. Whether you have questions about a product, need help with an order, or require support for any other reason, we’re here to assist you.
        </p>
        <p>
          Feel free to reach out to our dedicated support team at:  
          <br />
          📧 <a href="mailto:support@myelectrovault.com">support@myelectrovault.com</a>
        </p>
        <p>
          <strong>When you contact us, please provide:</strong>
        </p>
        <ul>
          <li>Your full name</li>
          <li>A brief description of your inquiry or concern</li>
          <li>Your order ID (if applicable)</li>
        </ul>
        <p>
          This will help us respond to your needs as quickly and efficiently as possible.
        </p>
        <p>
          <strong>Why choose ElectroVault support?</strong>
        </p>
        <ul>
          <li>📋 Clear Guidance: Receive detailed and straightforward assistance.</li>
          <li>🚀 Quick Responses: We aim to reply to all inquiries within 24 hours.</li>
          <li>💼 Professional Support: Our team is equipped to handle all your concerns.</li>
        </ul>
        <p>
          Thank you for choosing <strong>ElectroVault</strong>. We’re always happy to assist you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
