import React from "react";
import AdminProfile from "../components/AdminProfile";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const goToCandidateManagement = () => {
    navigate("/candidateManagement");
  };

  const goToVoteStats = () => {
    navigate("/voteStats");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="admin-dashboard-wrapper">
      <header className="admin-dashboard-header">
        <h1>👩‍💼 Admin Dashboard</h1>
        <div className="admin-actions">
          <button className="btn btn-manage" onClick={goToCandidateManagement}>
            Manage Candidates
          </button>
          <button className="btn btn-stats" onClick={goToVoteStats}>
            View Vote Stats
          </button>
          <button className="btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="admin-dashboard-main">
        <AdminProfile />
      </main>
    </div>
  );
};

export default AdminDashboard;
