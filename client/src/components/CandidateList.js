import React, { useState, useEffect } from "react";
import api from "../services/api";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await api.get("/candidate");
        setCandidates(response.data);
      } catch (error) {
        setError("Failed to fetch candidates");
      }
    };
    fetchCandidates();
  }, []);

  return (
    <div>
      <h3>List of Candidates</h3>
      {error && <div className="error">{error}</div>}
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id}>
            {candidate.name} - {candidate.party}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateList;