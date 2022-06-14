import { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  function inputChangeHandler(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign up</h1>
      <form className="signup-form" onSubmit={submitHandler}>
        <div className="field">
          <label className="field-label" id="fullName">
            ID
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            className="field-input"
            value={formData.fullName}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="field">
          <label className="field-label" id="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="field-input"
            value={formData.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="field">
          <label className="field-label" id="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Create your password"
            className="field-input"
            value={formData.password}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="field">
          <label className="field-label" id="passwordConfirmation">
            Confirm Password
          </label>
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Enter password confirm"
            className="field-input"
            value={formData.passwordConfirmation}
            onChange={inputChangeHandler}
          />
        </div>
        <button type="submit" className="btn-submit">
          Sign up
        </button>
      </form>
    </div>
  );
}