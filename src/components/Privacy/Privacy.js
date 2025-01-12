import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p>
          At <strong>ElectroVault</strong>, we are committed to protecting your personal information and ensuring your experience with us is safe and secure. This Privacy Policy explains how we collect, use, and share your data.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, phone number, billing and shipping addresses, and payment details.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, IP address, device information, and usage data.
          </li>
          <li>
            <strong>Cookies and Tracking:</strong> Technologies to enhance your browsing experience and analyze site performance.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use your data to:</p>
        <ul>
          <li>Process and deliver your orders, including sending confirmations and updates.</li>
          <li>Respond to inquiries and provide customer support.</li>
          <li>Send promotional emails and special offers (only if you opt-in).</li>
          <li>Improve website performance and user experience.</li>
          <li>Prevent fraud and enhance security.</li>
        </ul>

        <h2>How We Share Your Information</h2>
        <p>We do not sell your personal information. However, we may share data with:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> For payment processing, shipping, and website analytics.
          </li>
          <li>
            <strong>Legal Authorities:</strong> When required by law or to protect our rights.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.
          </li>
        </ul>

        <h2>Your Rights and Choices</h2>
        <p>As a valued customer, you have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal data.</li>
          <li>Opt-out of marketing communications at any time.</li>
          <li>Disable cookies through your browser settings.</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We retain your data as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
        </p>

        <h2>Data Security</h2>
        <p>
          We take reasonable steps to protect your data from unauthorized access, disclosure, or misuse. However, no system is completely secure.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not responsible for their privacy practices or content.
        </p>

        <h2>Children’s Privacy</h2>
        <p>
          ElectroVault does not knowingly collect data from children under 13. If we learn that we have collected information from a child without parental consent, we will delete it immediately.
        </p>

        <h2>Updates to this Privacy Policy</h2>
        <p>
          This policy may be updated periodically. Changes will be posted on this page with the revised date.
        </p>

        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>
            <strong>Email:</strong> support@myelectrovault.com
          </li>
          <li>
            <strong>Phone:</strong> +234 91 6463 3598
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Privacy;
