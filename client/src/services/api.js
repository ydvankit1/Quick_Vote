
import axios from "axios";

const baseURL = "http://localhost:5000"; // Change this to match your backend URL

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to set the authentication token
api.setToken = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default api;