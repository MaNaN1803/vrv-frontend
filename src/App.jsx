import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import ModeratorPanel from "./pages/ModeratorPanel";
import UserPanel from "./pages/UserPanel";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={<ProtectedRoute role="Admin" component={AdminPanel} />}
        />
        <Route
          path="/moderator"
          element={<ProtectedRoute role="Moderator" component={ModeratorPanel} />}
        />
        <Route
          path="/user"
          element={<ProtectedRoute role="User" component={UserPanel} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
