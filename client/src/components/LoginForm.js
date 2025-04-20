import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/RegisterForm.css"; 
const LoginForm = () => {
  const [aadharCardNumber, setAadharCardNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/login", {
        aadharCardNumber,
        password,
      });
  
      const token = response.data.token;
      localStorage.setItem("token", token);
      const userRole = response.data.role;
  
      if (userRole === "admin") {
        navigate("/adminDashboard");
      } else if (userRole === "voter") {
        navigate("/userDashboard");
      }
    } catch (error) {
      if (error.response) {
        const backendMessage = error.response.data.error;
  
        if (backendMessage === "Aadhar Card Number and password are required") {
          setError("❗ Aadhar Card Number and Password are required");
        } else if (backendMessage === "Invalid Aadhar Card Number or Password") {
          setError("❗ Invalid Aadhar Card Number or Password");
        } else {
          setError("❗ " + backendMessage);
        }
      } else {
        setError("❗ Login failed. Please try again later.");
      }
    }
  };
  

  return (
    <div className="register-form-container"> 
      <div className="form-card">
        <h2>Login to Your Account</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="aadharCardNumber">Aadhar Card Number</label>
            <input
              type="text"
              id="aadharCardNumber"
              placeholder="Enter your Aadhar number"
              value={aadharCardNumber}
              onChange={(e) => setAadharCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
