import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/AdminProfile.css";

const AdminProfile = () => {
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAdminData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch admin profile");
        setLoading(false);
      }
    };
    fetchAdminData();
  }, []);

  if (loading) {
    return <div className="admin-profile-card">Loading admin info...</div>;
  }

  if (error) {
    return <div className="admin-profile-card error">{error}</div>;
  }

  return (
    <div className="admin-profile-card">
      <h3>Your Profile</h3>
      <p><strong>Name:</strong> {adminData.user.name}</p>
      <p><strong>Email:</strong> {adminData.user.email}</p>
    </div>
  );
};

export default AdminProfile;
