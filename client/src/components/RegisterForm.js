import "../styles/RegisterForm.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [aadharCardNumber, setAadharCardNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/signup", {
        name,
        age,
        email,
        mobile,
        address,
        aadharCardNumber,
        password,
        role: isAdmin ? "admin" : "voter",
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        const backendMessage = error.response.data.error;

        if (backendMessage === "Admin user already exists") {
          setError("❗ Admin user already exists");
        } else if (backendMessage === "Aadhar Card Number must be exactly 12 digits") {
          setError("❗ Aadhar Card Number must be exactly 12 digits");
        } else if (backendMessage === "User with the same Aadhar Card Number already exists") {
          setError("❗ A user with this Aadhar Card Number already exists");
        } else {
          setError("❗ " + backendMessage);
        }
      } else {
        setError("❗ Registration failed. Please check your details and try again.");
      }
    }
  };


  return (
    <div className="register-form-container">
      <div className="form-card">
        <h2>Create Your Account</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <label htmlFor="adminCheckbox" style={{ fontWeight: 'bold' }}>
              Are you registering as an Admin?
            </label>
            <input
              type="checkbox"
              id="adminCheckbox"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            <small style={{ display: 'block', marginTop: '6px', color: '#555' }}>
              Leave unchecked if you're registering as a <strong>Voter</strong>.
            </small>
          </div>
          
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
