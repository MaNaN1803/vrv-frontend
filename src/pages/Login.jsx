import { useState } from "react";
import { login } from "../utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) window.location = "/";
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ color: "grey" }}>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
