import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import Gallery from "./admin/Gallery";

function Home() {

  return (

    <div style={{
      background:"#001a14",
      color:"white",
      minHeight:"100vh",
      fontFamily:"Arial"
    }}>

      <header style={{
        background:"#01251d",
        padding:"20px",
        display:"flex",
        justifyContent:"space-between"
      }}>

        <h2 style={{
          color:"#d4af37"
        }}>
          SS GENPOWER
        </h2>

      </header>

      <section style={{
        padding:"100px 20px",
        textAlign:"center"
      }}>

        <h1 style={{
          color:"#d4af37",
          fontSize:"60px"
        }}>
          Premium Generator Services
        </h1>

        <p style={{
          marginTop:"20px",
          fontSize:"22px",
          color:"#ccc"
        }}>
          Generator Repair • Installation • AMC Service
        </p>

      </section>

    </div>

  );

}

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<Login />} />

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
