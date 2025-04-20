import "../styles/VotingStatistics.css";
import React, { useEffect, useState } from "react";
import api from "../services/api";

const VotingStatistics = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        api.setToken(localStorage.getItem("token"));
        const response = await api.get("/candidate");
        setCandidates(response.data);
      } catch (error) {
        setError("Failed to fetch voting statistics");
        console.error(error);
      }
    };
    fetchCandidates();
  }, []);

  return (
    <div className="voting-stats-container">
      <div className="voting-stats-header">
        <h2>📊 Voting Statistics</h2>
        <p>Overview of votes received by each candidate</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="table-wrapper">
        <table className="stats-table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Party</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate._id}>
                <td>{candidate.name}</td>
                <td>{candidate.party}</td>
                <td>{candidate.voteCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VotingStatistics;
