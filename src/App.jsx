
function App() {
  return (
    <div style={{
      fontFamily:"Arial",
      background:"#071f18",
      color:"#fff"
    }}>

      {/* HEADER */}
      <header style={{
        padding:"20px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        background:"#0b2f25",
        position:"sticky",
        top:"0"
      }}>
        <h2 style={{color:"#d9b23f"}}>SS GENPOWER</h2>

        <div style={{display:"flex",gap:"15px"}}>
          <a href="#home" style={link}>Home</a>
          <a href="#services" style={link}>Services</a>
          <a href="#gallery" style={link}>Gallery</a>
          <a href="#contact" style={link}>Contact</a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" style={{
        padding:"80px 20px",
        textAlign:"center"
      }}>
        <h1 style={{
          fontSize:"50px",
          color:"#d9b23f"
        }}>
          Premium Generator Services
        </h1>

        <p style={{
          maxWidth:"700px",
          margin:"20px auto",
          lineHeight:"30px",
          color:"#ddd"
        }}>
          Generator Sales • Repair • Installation • AMC Service •
          Industrial Power Solutions
        </p>

        <button style={{
          padding:"15px 35px",
          background:"#d9b23f",
          border:"none",
          borderRadius:"10px",
          fontWeight:"bold",
          cursor:"pointer"
        }}>
          Call Now
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" style={{
        padding:"60px 20px"
      }}>
        <h2 style={title}>Our Services</h2>

        <div style={grid}>
          <div style={card}>
            <h3>Generator Repair</h3>
            <p>Complete generator repairing and maintenance service.</p>
          </div>

          <div style={card}>
            <h3>Installation</h3>
            <p>Professional installation for homes and industries.</p>
          </div>

          <div style={card}>
            <h3>AMC Contract</h3>
            <p>Affordable annual maintenance plans available.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{
        padding:"60px 20px"
      }}>
        <h2 style={title}>Gallery</h2>

        <div style={grid}>
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
            style={img}
          />

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            style={img}
          />

          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            style={img}
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        padding:"60px 20px",
        textAlign:"center"
      }}>
        <h2 style={title}>Contact Us</h2>

        <p style={{marginTop:"20px"}}>
          📞 +91 9335723818
        </p>

        <p>
          📍 Kanpur, Uttar Pradesh
        </p>

        <button style={{
          marginTop:"20px",
          padding:"15px 35px",
          background:"#d9b23f",
          border:"none",
          borderRadius:"10px",
          fontWeight:"bold"
        }}>
          WhatsApp Now
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{
        background:"#0b2f25",
        padding:"20px",
        textAlign:"center",
        marginTop:"40px"
      }}>
        © 2026 SS GENPOWER. All Rights Reserved.
      </footer>

    </div>
  )
}

const title = {
  textAlign:"center",
  color:"#d9b23f",
  marginBottom:"40px",
  fontSize:"38px"
}

const grid = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
  gap:"25px"
}

const card = {
  background:"#102f27",
  padding:"30px",
  borderRadius:"20px",
  boxShadow:"0 10px 30px rgba(0,0,0,0.3)"
}

const img = {
  width:"100%",
  borderRadius:"20px",
  height:"250px",
  objectFit:"cover"
}

const link = {
  color:"#fff",
  textDecoration:"none",
  fontWeight:"bold"
}

export default App
