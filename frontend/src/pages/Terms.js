import React from "react";
import './Terms.css';
const Terms = () => {
    return (
        <div className="policy-container">
          <h1>Terms & Conditions</h1>
          
          <p className="policy-intro">
            By accessing and using our website, you agree to comply with the following terms and conditions.
          </p>
    
          <section className="policy-section">
            <h3>Product Information</h3>
            <p>
              We make every effort to display accurate product details, images, and prices. However, slight variations in packaging or appearance may occur.
            </p>
          </section>
    
          <section className="policy-section">
            <h3>Pricing & Availability</h3>
            <ul>
              <li>Prices are subject to change without prior notice.</li>
              <li>Product availability may vary, and we reserve the right to limit quantities.</li>
            </ul>
          </section>
    
          <section className="policy-section">
            <h3>Orders & Payments</h3>
            <ul>
              <li>Orders are confirmed only after successful payment or order confirmation (for Cash on Delivery).</li>
              <li>We reserve the right to cancel any order due to stock unavailability, payment issues, or suspected fraudulent activity.</li>
            </ul>
          </section>
    
          <section className="policy-section">
            <h3>Cancellation & Refunds</h3>
            <ul>
              <li>Orders can be cancelled before shipment.</li>
              <li>Refunds (if applicable) will be processed within 5–7 business days to the original payment method.</li>
            </ul>
          </section>
    
          <section className="policy-section">
            <h3>User Responsibilities</h3>
            <p>
              You agree not to misuse the website or engage in activities that could harm the platform, its users, or services.
            </p>
          </section>
    
          <section className="policy-section">
            <h3>Limitation of Liability</h3>
            <p>
              We are not responsible for delays or damages caused by external factors beyond our control, including courier services or natural events.
            </p>
          </section>
    
          <div className="policy-footer">
            <p>Last Updated: January 2026</p>
            <p>For questions regarding these terms, please contact our support team.</p>
          </div>
        </div>
      );
};

export default Terms;
