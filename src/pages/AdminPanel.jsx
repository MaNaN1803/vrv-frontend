import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../utils/api";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ color: "grey" }}>Admin Panel</h2>
      <table
        style={{
          width: "80%",
          margin: "20px auto",
          borderCollapse: "collapse",
          color: "white",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid grey", padding: "10px" }}>Username</th>
            <th style={{ border: "1px solid grey", padding: "10px" }}>Email</th>
            <th style={{ border: "1px solid grey", padding: "10px" }}>Role</th>
            <th style={{ border: "1px solid grey", padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td style={{ border: "1px solid grey", padding: "10px" }}>
                {user.username}
              </td>
              <td style={{ border: "1px solid grey", padding: "10px" }}>
                {user.email}
              </td>
              <td style={{ border: "1px solid grey", padding: "10px" }}>
                {user.role}
              </td>
              <td style={{ border: "1px solid grey", padding: "10px" }}>
                <button
                  onClick={() => handleDelete(user._id)}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                  }}
                >
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

export default AdminPanel;
