import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#001a14",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#d4af37",
        fontSize: "40px",
        fontWeight: "bold",
      }}
    >
      SS GENPOWER
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
