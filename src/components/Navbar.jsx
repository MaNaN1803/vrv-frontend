import { Link, useNavigate } from "react-router-dom";
import { logout, getUserRole } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const role = getUserRole();
  console.log("User Role:", role);
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", backgroundColor: "black", color: "white" }}>
      <Link to="/" style={{ color: "white", marginRight: "15px" }}>
        Dashboard
      </Link>
      {role === "Admin" && (
        <Link to="/admin" style={{ color: "white", marginRight: "15px" }}>
          Admin Panel
        </Link>
      )}
      {role === "Moderator" && (
        <Link to="/moderator" style={{ color: "white", marginRight: "15px" }}>
          Moderator Panel
        </Link>
      )}
      {role === "User" && (
        <Link to="/user" style={{ color: "white", marginRight: "15px" }}>
          User Panel
        </Link>
      )}
      {/* Register link for users who are not logged in */}
      {!role && (
        <Link to="/register" style={{ color: "white", marginRight: "15px" }}>
          Register
        </Link>
      )}
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "white",
          color: "black",
          border: "none",
          padding: "5px 10px",
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
