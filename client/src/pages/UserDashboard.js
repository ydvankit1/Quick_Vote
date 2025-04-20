import React from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import "../styles/UserDashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const goToVotingProcess = () => {
    navigate("/votingProcess");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <div className="dashboard-actions">
          <button className="btn voting-btn" onClick={goToVotingProcess}>
            🗳️ Voting Process
          </button>
          <button className="btn logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </header>

      <main className="dashboard-main">
        <UserProfile />
      </main>
    </div>
  );
};

export default Dashboard;
