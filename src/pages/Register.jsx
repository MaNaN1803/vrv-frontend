import { useState } from "react";
import { register } from "../utils/api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

  const handleRegister = async (e) => {
    e.preventDefault();
    const success = await register(username, email, password, role);
    if (success) window.location = "/login";
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ color: "grey" }}>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "80%",
            border: "1px solid grey",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "80%",
            border: "1px solid grey",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "80%",
            border: "1px solid grey",
          }}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            display: "block",
            margin: "10px auto",
            padding: "10px",
            width: "80%",
            border: "1px solid grey",
          }}
        >
          <option value="User">User</option>
          <option value="Moderator">Moderator</option>
          <option value="Admin">Admin</option>
        </select>
        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
