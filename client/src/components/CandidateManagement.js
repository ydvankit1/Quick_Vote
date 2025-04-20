import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/CandidateManagement.css";

const CandidateManagement = () => {
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState("");
  const [party, setParty] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [editingCandidateId, setEditingCandidateId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", party: "", age: "" });

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const response = await api.get("/candidate");
      setCandidates(response.data);
    } catch (error) {
      setError("Failed to fetch candidates");
    }
  };

  const handleAddCandidate = async (e) => {
    e.preventDefault();
    try {
      api.setToken(localStorage.getItem("token"));
      await api.post("/candidate", { name, party, age });
      fetchCandidates();
      setName("");
      setParty("");
      setAge("");
    } catch (error) {
      setError("Failed to add candidate. Please try again.");
    }
  };

  const startEditing = (candidate) => {
    setEditingCandidateId(candidate._id);
    setEditForm({ name: candidate.name, party: candidate.party, age: candidate.age });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value })); 
  };

  const handleSaveUpdate = async (candidateId) => {
    try {
      api.setToken(localStorage.getItem("token"));
      await api.put(`/candidate/${candidateId}`, editForm);
      setEditingCandidateId(null);
      fetchCandidates();
    } catch (error) {
      setError("Failed to update candidate. Please try again.");
    }
  };

  const handleDeleteCandidate = async (candidateId) => {
    try {
      api.setToken(localStorage.getItem("token"));
      await api.delete(`/candidate/${candidateId}`);
      fetchCandidates();
    } catch (error) {
      setError("Failed to delete candidate. Please try again.");
    }
  };

  return (
    <div className="candidate-management-container">
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleAddCandidate}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="party">Party:</label>
          <input
            type="text"
            id="party"
            value={party}
            onChange={(e) => setParty(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Candidate</button>
      </form>

      <h3>Candidates List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
            <th>Age</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate._id}>
              <td>
                {editingCandidateId === candidate._id ? (
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                  />
                ) : (
                  candidate.name
                )}
              </td>
              <td>
                {editingCandidateId === candidate._id ? (
                  <input
                    type="text"
                    name="party"
                    value={editForm.party}
                    onChange={handleEditChange}
                  />
                ) : (
                  candidate.party
                )}
              </td>
              <td>
                {editingCandidateId === candidate._id ? (
                  <input
                    type="number"
                    name="age"
                    value={editForm.age}
                    onChange={handleEditChange}
                  />
                ) : (
                  candidate.age
                )}
              </td>
              <td>
                {editingCandidateId === candidate._id ? ( 
                  <button onClick={() => handleSaveUpdate(candidate._id)}>Save</button>
                ) : (
                  <button onClick={() => startEditing(candidate)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => handleDeleteCandidate(candidate._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateManagement;
