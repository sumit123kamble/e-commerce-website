import React from "react";
import './Policy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      
      <p className="privacy-intro">
        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
      </p>

      <section className="privacy-section">
        <h3>Information We Collect</h3>
        <p>We may collect the following information:</p>
        <ul>
          <li>Name</li>
          <li>Contact details (email, phone number)</li>
          <li>Shipping address</li>
          <li>Payment details (processed securely via third-party gateways)</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>How We Use Your Information</h3>
        <ul>
          <li>To process and deliver orders</li>
          <li>To communicate order updates</li>
          <li>To improve our products and services</li>
          <li>To comply with legal requirements</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>Data Security</h3>
        <p>
          We implement appropriate security measures to protect your personal data. Payment transactions are handled through secure and trusted payment gateways.
        </p>
      </section>

      <section className="privacy-section">
        <h3>Sharing of Information</h3>
        <p>We do not sell or share your personal information with third parties, except:</p>
        <ul>
          <li>Delivery partners</li>
          <li>Payment service providers</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h3>Cookies</h3>
        <p>
          Our website may use cookies to enhance user experience and analyze website traffic.
        </p>
      </section>

      <section className="privacy-section">
        <h3>Changes to This Policy</h3>
        <p>
          We reserve the right to update this policy at any time. Changes will be reflected on this page.
        </p>
      </section>

      <div className="privacy-footer">
        <p>Last Updated: January 2026</p>
        <p>For questions about our privacy practices, please contact our support team.</p>
      </div>
    </div>
  );
};

export default Privacy;