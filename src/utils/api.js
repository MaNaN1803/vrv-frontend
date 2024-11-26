import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("token", res.data.token);
    return true;
  } catch (err) {
    alert(err.response.data.message || "Login failed");
    return false;
  }
};

export const register = async (username, email, password, role) => {
  try {
    await axios.post(`${API_URL}/register`, { username, email, password, role });
    alert("Registration successful! Please log in.");
    return true;
  } catch (err) {
    alert(err.response.data.message || "Registration failed");
    return false;
  }
};

export const getUserInfo = async () => {
    try {
      const res = await axios.get(`${API_URL}/user-info`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      return res.data;
    } catch (err) {
      console.error("Error fetching user info:", err.response?.data || err.message);
      alert("Failed to fetch user info. Please try again.");
      return null;
    }
  };
  

export const getUsers = async () => {
  try {
    const res = await axios.get(`${API_URL}/admin/users`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  } catch (err) {
    alert("Failed to fetch users");
    return [];
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/admin/users/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  } catch (err) {
    alert("Failed to delete user");
  }
};
