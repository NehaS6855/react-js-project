/** @format */

import React from "react";
import "../Style/HomePage.css";

const JoinInForm = () => {
  return (
    <>
      <button className="btn btn-outline-primary mb-2 google-button">
        <i className="fab fa-google"></i> Continue with Google
      </button>
      <button className="btn btn-outline-primary mb-2 facebook-button">
        <i className="fab fa-facebook-f"></i> Continue with Facebook
      </button>
      <div className="divider">Or connect with</div>
      <form className="sign-in-form">
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <div className="password-wrapper mb-2">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <i className="fas fa-eye-slash password-icon"></i>
        </div>
        <div className="form-check mb-2 d-flex align-items-center justify-content-between">
          <div>
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMe"
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <a href="#" className="forgot-password">
            <i className="fas fa-lock"></i> Forgot password?
          </a>
        </div>
        <p className="terms">
          By continuing, you agree to our <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </p>
        <button
          type="submit"
          className="btn border-dark btn-info mb-2 continue1-button"
        >
          Agree and Continue
        </button>
      </form>
    </>
  );
};

export default JoinInForm;
