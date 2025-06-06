import React from "react";
// import "./App.css";

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <form className="signup-form">
          <label>Name</label>
          <input type="text" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="At least 6 characters" required />
          <small>Passwords must be at least 6 characters.</small>

          <button type="submit">Create your Amazon account</button>
        </form>
        <p>
          By creating an account, you agree to Amazon's <a href="#">Terms</a> &{" "}
          <a href="#">Privacy Policy</a>.
        </p>

        <hr />
        <p>
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

