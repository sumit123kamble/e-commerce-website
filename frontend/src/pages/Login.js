import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h3>Welcome Back</h3>
        <p className="login-subtitle">
          Login to continue shopping your favorite food items
        </p>

        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>Don’t have an account? <span>Sign up</span></p>
          <p className="forgot">Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
