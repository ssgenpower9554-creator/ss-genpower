import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Gallery from "./admin/Gallery";
import ContactForm from "./components/ContactForm";

function Home() {

  return (

    <div style={{
      background:"#001a14",
      color:"white",
      fontFamily:"Arial"
    }}>

      {/* NAVBAR */}

      <header style={{
        background:"#01251d",
        padding:"20px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        position:"sticky",
        top:"0",
        zIndex:"1000"
      }}>

        <h2 style={{
          color:"#d4af37"
        }}>
          SS GENPOWER
        </h2>

        <div style={{
          display:"flex",
          gap:"20px"
        }}>

          <a href="#home" style={link}>
            Home
          </a>

          <a href="#services" style={link}>
            Services
          </a>

          <a href="#gallery" style={link}>
            Gallery
          </a>

          <a href="#contact" style={link}>
            Contact
          </a>

        </div>

      </header>

      {/* HERO */}

      <section
        id="home"
        style={{
          minHeight:"90vh",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
          padding:"20px"
        }}
      >

        <h1 style={{
          color:"#d4af37",
          fontSize:"65px"
        }}>
          Premium Generator Services
        </h1>

        <p style={{
          marginTop:"20px",
          fontSize:"24px",
          color:"#ccc",
          maxWidth:"800px",
          lineHeight:"40px"
        }}>
          Generator Repair • Installation •
          Maintenance • Industrial Power Solutions
        </p>

        <a
          href="https://wa.me/919335723818"
          target="_blank"
          style={{
            marginTop:"40px",
            background:"#25D366",
            color:"white",
            padding:"18px 40px",
            borderRadius:"12px",
            textDecoration:"none",
            fontWeight:"bold",
            fontSize:"20px"
          }}
        >
          WhatsApp Now
        </a>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        style={{
          padding:"80px 20px"
        }}
      >

        <h2 style={title}>
          OUR SERVICES
        </h2>

        <div style={grid}>

          <div style={card}>
            <h3>Generator Repair</h3>
            <p>
              Complete generator repair service.
            </p>
          </div>

          <div style={card}>
            <h3>Installation</h3>
            <p>
              Home and industrial installation.
            </p>
          </div>

          <div style={card}>
            <h3>AMC Service</h3>
            <p>
              Affordable maintenance solutions.
            </p>
          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section
        id="gallery"
        style={{
          padding:"80px 20px"
        }}
      >

        <h2 style={title}>
          OUR GALLERY
        </h2>

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
          padding:"80px 20px",
          textAlign:"center"
        }}
      >

        <h2 style={title}>
          CONTACT US
        </h2>

        <p style={{
          fontSize:"24px"
        }}>
          📞 +91 9335723818
        </p>

        <p style={{
          color:"#ccc",
          marginTop:"10px"
        }}>
          Lucknow, Uttar Pradesh
        </p>
        <ContactForm />

      </section>

      {/* FOOTER */}

      <footer style={{
        background:"#01251d",
        padding:"20px",
        textAlign:"center"
      }}>

        © 2026 SS GENPOWER

      </footer>

      {/* FLOATING BUTTON */}

      <a
        href="https://wa.me/919335723818"
        target="_blank"
        style={{
          position:"fixed",
          right:"20px",
          bottom:"20px",
          background:"#25D366",
          width:"65px",
          height:"65px",
          borderRadius:"50%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          color:"white",
          fontSize:"32px",
          textDecoration:"none"
        }}
      >
        💬
      </a>

    </div>

  );

}

const title = {
  textAlign:"center",
  color:"#d4af37",
  fontSize:"45px",
  marginBottom:"40px"
};

const grid = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
  gap:"25px"
};

const card = {
  background:"#01251d",
  padding:"30px",
  borderRadius:"20px"
};

const galleryGrid = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
  gap:"20px"
};

const img = {
  width:"100%",
  height:"250px",
  objectFit:"cover",
  borderRadius:"20px"
};

const link = {
  color:"white",
  textDecoration:"none",
  fontWeight:"bold"
};

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/admin"
          element={<Login />}
        />

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/admin/gallery"
          element={<Gallery />}
        />

      </Routes>

    </BrowserRouter>

  );

      }
