import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-top">
        <h1 className="app-title">Online Voting Application</h1>
      </div>
      <nav className="header-bottom">
        <ul>
          <li>
            <Link to="/">Go to Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
