import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./admin/Login";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#001b16",
        color: "white",
        padding: "60px",
      }}
    >
      <h1 style={{ color: "#d4af37", fontSize: "60px" }}>
        SS GENPOWER
      </h1>

      <p style={{ fontSize: "28px" }}>
        Premium Generator Services Website
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
