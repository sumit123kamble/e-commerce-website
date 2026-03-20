import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/');
    }, 1500);
  };

  const getPasswordStrength = (pwd) => {
    if (!pwd) return { label: '', level: 0 };
    if (pwd.length < 6) return { label: 'Weak', level: 1 };
    if (pwd.length < 10 && /[A-Z]/.test(pwd)) return { label: 'Fair', level: 2 };
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd) && /[^A-Za-z0-9]/.test(pwd)) return { label: 'Strong', level: 4 };
    if (/[A-Z]/.test(pwd) && /[0-9]/.test(pwd)) return { label: 'Good', level: 3 };
    return { label: 'Fair', level: 2 };
  };

  const strength = getPasswordStrength(formData.password);

  return (
    <div className="signup-page">

      {/* Left Panel — Brand */}
      <div className="signup-left">
        <div className="signup-left-inner">

          <Link to="/" className="signup-logo">
            FoodHub
          </Link>

          <div className="signup-left-content">
            <h2 className="signup-left-title">
              Fresh food,<br />
              <span>delivered daily.</span>
            </h2>
            <p className="signup-left-text">
              Join thousands of happy customers who trust FoodHub for
              premium, preservative-free food products.
            </p>

            <div className="signup-perks">
              <div className="perk-item">
                <span className="perk-icon">🌱</span>
                <span>100% Natural Ingredients</span>
              </div>
              <div className="perk-item">
                <span className="perk-icon">🚚</span>
                <span>Free delivery on ₹499+</span>
              </div>
              <div className="perk-item">
                <span className="perk-icon">💯</span>
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="deco-circle deco-circle-1"></div>
          <div className="deco-circle deco-circle-2"></div>
          <div className="deco-circle deco-circle-3"></div>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="signup-right">
        <div className="signup-form-container">

          <div className="signup-header">
            <h1 className="signup-title">Create Account</h1>
            <p className="signup-subtitle">
              Already have an account?{' '}
              <Link to="/login" className="signup-link">Sign in</Link>
            </p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit} noValidate>

            {/* Full Name */}
            <div className={`form-group ${errors.fullName ? 'has-error' : formData.fullName ? 'has-value' : ''}`}>
              <label className="form-label" htmlFor="fullName">Full Name</label>
              <div className="input-wrapper">
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  className="form-input"
                  placeholder="dipak Kumar"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
              {errors.fullName && <span className="form-error">{errors.fullName}</span>}
            </div>

            {/* Email */}
            <div className={`form-group ${errors.email ? 'has-error' : formData.email ? 'has-value' : ''}`}>
              <label className="form-label" htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            {/* Phone */}
            <div className={`form-group ${errors.phone ? 'has-error' : formData.phone ? 'has-value' : ''}`}>
              <label className="form-label" htmlFor="phone">
                Phone Number 
              </label>
              <div className="input-wrapper">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            {/* Password */}
            <div className={`form-group ${errors.password ? 'has-error' : formData.password ? 'has-value' : ''}`}>
              <label className="form-label" htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="form-input"
                  placeholder="Min. 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword((p) => !p)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {/* Password Strength Bar */}
              {formData.password && (
                <div className="password-strength">
                  <div className="strength-bars">
                    {[1, 2, 3, 4].map((lvl) => (
                      <div
                        key={lvl}
                        className={`strength-bar ${strength.level >= lvl ? `active level-${strength.level}` : ''}`}
                      />
                    ))}
                  </div>
                  <span className={`strength-label level-${strength.level}`}>{strength.label}</span>
                </div>
              )}
              {errors.password && <span className="form-error">{errors.password}</span>}
            </div>

            {/* Confirm Password */}
            <div className={`form-group ${errors.confirmPassword ? 'has-error' : formData.confirmPassword ? 'has-value' : ''}`}>
              <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <input
                  id="confirmPassword"
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  className="form-input"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirm((p) => !p)}
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirm ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`signup-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Creating Account...
                </>
              ) : (
                <>
                  Create My Account
                  <span className="btn-arrow">→</span>
                </>
              )}
            </button>

            <p className="signup-terms">
              By signing up, you agree to our{' '}
              <Link to="/terms" className="signup-link">Terms of Service</Link>{' '}
              and{' '}
              <Link to="/policy" className="signup-link">Privacy Policy</Link>
            </p>

          </form>
        </div>
      </div>

    </div>
  );
};

export default Signup;