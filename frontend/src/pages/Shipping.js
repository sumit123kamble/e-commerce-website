import React from "react";
import './Shipping.css';

const Shipping = () => {
  return (
    <div className="shipping-container">
      <h2>Shipping & Delivery Policy</h2>

      <p>
        We aim to deliver our products in the fastest and safest way possible
        while maintaining product quality.
      </p>

      <h3>Shipping Coverage</h3>
      <p>
        We currently ship our products across India. Delivery availability may
        vary based on the customer’s location.
      </p>

      <h3>Order Processing Time</h3>
      <p>
        Orders are processed within 1–2 business days after confirmation.
        Orders placed on weekends or public holidays will be processed on the
        next business day.
      </p>

      <h3>Delivery Time</h3>
      <ul>
        <li>Metro cities: 3–5 business days</li>
        <li>Other locations: 5–8 business days</li>
      </ul>
      <p>
        Delivery times may vary due to courier partner delays, weather
        conditions, or unforeseen circumstances.
      </p>

      <h3>Shipping Charges</h3>
      <p>
        Shipping charges (if any) will be clearly mentioned at checkout before
        placing the order. Free shipping may be available on selected products
        or during promotional offers.
      </p>

      <h3>Order Tracking</h3>
      <p>
        Once your order is shipped, you will receive a tracking ID via email or
        SMS to monitor the delivery status.
      </p>

      <h3>Damaged or Missing Products</h3>
      <p>If you receive a damaged product or if any item is missing:</p>
      <ul>
        <li>Contact us within 48 hours of delivery</li>
        <li>Share order details and images (if applicable)</li>
      </ul>
      <p>
        We will investigate and provide a replacement or refund as per our
        policy.
      </p>
    </div>
  );
};

export default Shipping;
