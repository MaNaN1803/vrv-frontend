// src/pages/UserPanel.jsx

import { useEffect, useState } from "react";
import { getUserInfo } from "../utils/api";

const UserPanel = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserInfo();
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center", color: "white" }}>
      <h2 style={{ color: "grey" }}>User Panel</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default UserPanel;
