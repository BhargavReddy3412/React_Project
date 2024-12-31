import React, { useState } from "react";
import "./signup.css";
import { useNavigate, Link } from "react-router-dom";
// import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
// import { app } from "../../FireBase_Folder/FireBase";

function SignupForm() {
  // const signUpStoreWithFirebase = getAuth(app);
  const navigate = useNavigate();
  const [signupformData, setsignupFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setsignupFormData({ ...signupformData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signupformData.password !== signupformData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      // const userCredential = await createUserWithEmailAndPassword(
        // signUpStoreWithFirebase,
        // signupformData.email,
        // signupformData.password
      // );

      alert("SignUp successfully");
      navigate("/Login");
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || "An error occurred during signup.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={signupformData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={signupformData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={signupformData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={signupformData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="already-account">
        <p>
          Already have an account? <Link to="/Login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
