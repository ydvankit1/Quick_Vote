import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CandidateManagement from "./components/CandidateManagement";
import VotingProcess from "./components/VotingProcess";
import VotingResult from "./components/VoteResults";
import VotingStatistics from "./components/VotingStatistics";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route
            path="/candidateManagement"
            element={<CandidateManagement />}
          />
          <Route path="/votingProcess" element={<VotingProcess />} />
          <Route path="/votingResult" element={<VotingResult/>} />
          <Route path="/voteStats" element={<VotingStatistics />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;