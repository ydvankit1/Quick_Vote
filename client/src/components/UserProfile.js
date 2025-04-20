import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await api.get("/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);

        const votingStatusResponse = await api.get("/user/voting-status", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHasVoted(votingStatusResponse.data.hasVoted);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch user profile");
      }
    };
    fetchUserProfile();
  }, []);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const token = localStorage.getItem("token");
      await api.put(
        "/user/profile/password",
        {
          currentPassword: password,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPassword("");
      setNewPassword("");
      setError("✅ Password updated successfully");
    } catch (error) {
      const msg =
        error?.response?.data?.error || "❗ Failed to update password.";
      setError("❗ " + msg);
    }
  };

  if (!user) return <div className="loading">Loading profile...</div>;

  return (
    <div className="profile-card">
      {error && <div className="profile-error">{error}</div>}
      <h2>👤 Your Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Aadhar Number:</strong> {user.aadharCardNumber}</p>
        <p><strong>Status:</strong> {hasVoted ? "✅ Voted" : "❌ Not Voted"}</p>
      </div>

      <form className="password-form" onSubmit={handlePasswordUpdate}>
        <h3>🔒 Update Password</h3>
        <input
          type="password"
          placeholder="Current Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UserProfile;
