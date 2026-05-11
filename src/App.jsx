import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Gallery from "./admin/Gallery";

function Home() {
  return (
    <div
      style={{
        background: "#001a14",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#01251d",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
      >
        <h2 style={{ color: "#d4af37" }}>SS GENPOWER</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#home" style={link}>Home</a>
          <a href="#services" style={link}>Services</a>
          <a href="#gallery" style={link}>Gallery</a>
          <a href="#contact" style={link}>Contact</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background:
            "linear-gradient(to right,#001a14,#033126,#001a14)",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#d4af37",
            marginBottom: "20px",
          }}
        >
          Premium Generator Services
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            lineHeight: "35px",
            fontSize: "22px",
            color: "#ddd",
          }}
        >
          Generator Sales • Installation • Repair • AMC Service •
          Industrial Power Backup Solutions
        </p>

        <button
          style={{
            marginTop: "40px",
            padding: "18px 40px",
            border: "none",
            borderRadius: "10px",
            background: "#d4af37",
            fontWeight: "bold",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Contact Now
        </button>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "80px 20px",
        }}
      >
        <h2 style={title}>OUR SERVICES</h2>

        <div style={grid}>
          <div style={card}>
            <h3>Generator Repair</h3>
            <p>Complete generator repair solutions.</p>
          </div>

          <div style={card}>
            <h3>Installation</h3>
            <p>Industrial & home generator installation.</p>
          </div>

          <div style={card}>
            <h3>AMC Service</h3>
            <p>Affordable maintenance contracts available.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        style={{
          padding: "80px 20px",
        }}
      >
        <h2 style={title}>OUR GALLERY</h2>

        <div style={galleryGrid}>
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
            style={img}
          />

          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            style={img}
          />

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            style={img}
          />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={title}>CONTACT US</h2>

        <p style={{ fontSize: "22px" }}>📞 +91 9335723818</p>

        <p style={{ marginTop: "10px", color: "#ccc" }}>
          Kanpur, Uttar Pradesh
        </p>

        <a
          href="https://wa.me/919335723818"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "15px 35px",
            background: "#25D366",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp Now
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#01251d",
          padding: "20px",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        © 2026 SS GENPOWER. All Rights Reserved.
      </footer>
    </div>
  );
}

const title = {
  textAlign: "center",
  color: "#d4af37",
  marginBottom: "40px",
  fontSize: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "25px",
};

const card = {
  background: "#01251d",
  padding: "30px",
  borderRadius: "20px",
};

const galleryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "20px",
};

const img = {
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "20px",
};

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
