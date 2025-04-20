import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/VotingProcess.css";

const VotingProcess = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCandidates = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/candidate", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCandidates(response.data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch candidates!");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const castVote = async (candidateId) => {
    try {
      const token = localStorage.getItem("token");
      await api.post(`/candidate/vote/${candidateId}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setError("✅ Voted successfully!");
      fetchCandidates();
    } catch (error) {
      if (error.response) {
        const backendMessage = error.response.data.message;
        if (backendMessage === "You have already voted") {
          setError("❗ You have already voted.");
        } else if (backendMessage === "admin is not allowed") {
          setError("Admins are not allowed to vote.");
        } else {
          setError("Failed to cast vote. Please try again.");
        }
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="voting-process-container">
      <h2 className="voting-process-heading">🗳️ Voting Process</h2>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <p className="loading-message">Loading candidates...</p>
      ) : (
        <>
          <table className="candidate-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Party</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate._id}>
                  <td>{candidate.name}</td>
                  <td>{candidate.party}</td>
                  <td>
                    <button
                      className="vote-button"
                      onClick={() => castVote(candidate._id)}
                      disabled={!candidate._id}
                    >
                      Vote
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default VotingProcess;
