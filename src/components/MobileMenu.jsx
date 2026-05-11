import { useState } from "react";

export default function MobileMenu() {

  const [open,setOpen] = useState(false);

  return (

    <div>

      <button
        onClick={()=>setOpen(!open)}
        style={{
          background:"transparent",
          border:"none",
          color:"white",
          fontSize:"30px",
          cursor:"pointer"
        }}
      >
        ☰
      </button>

      {
        open && (

          <div style={{
            position:"absolute",
            top:"70px",
            right:"20px",
            background:"#01251d",
            padding:"20px",
            borderRadius:"15px",
            display:"flex",
            flexDirection:"column",
            gap:"15px"
          }}>

            <a href="#home" style={link}>
              Home
            </a>

            <a href="#services" style={link}>
              Services
            </a>

            <a href="#products" style={link}>
              Products
            </a>

            <a href="#gallery" style={link}>
              Gallery
            </a>

            <a href="#contact" style={link}>
              Contact
            </a>

          </div>

        )
      }

    </div>

  );

}

const link = {
  color:"white",
  textDecoration:"none",
  fontWeight:"bold"
};
