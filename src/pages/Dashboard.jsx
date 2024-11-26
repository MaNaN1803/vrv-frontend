import { useEffect, useState } from "react";
import { getUserInfo } from "../utils/api";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserInfo();
      setUserInfo(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "grey" }}>Welcome to the Dashboard</h1>
      {userInfo ? (
        <div style={{ color: "black" }}>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
          <p>Role: {userInfo.role}</p>
        </div>
      ) : (
        <p style={{ color: "black" }}>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
