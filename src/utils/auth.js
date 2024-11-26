// src/utils/auth.js

export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;
  
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const isExpired = payload.exp * 1000 < Date.now();
      return !isExpired;
    } catch (err) {
      return false;
    }
  };
  
  export const getUserRole = () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
  
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.role || null;
    } catch (err) {
      return null;
    }
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };
  