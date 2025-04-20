import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import bgImage from "../assets/voting-bg.jpg";

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="content">
        <h2 className="home-subtitle">Your Vote, Your Voice</h2>
        <div className="button-container">
          <button className="action-button" onClick={goToLogin}>
            Login
          </button>
          <button className="action-button" onClick={goToRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
