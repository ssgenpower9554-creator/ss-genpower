import { Link } from "react-router-dom";

export default function AdminSidebar() {

  return (

    <div style={{
      width:"250px",
      minHeight:"100vh",
      background:"#01251d",
      padding:"20px",
      position:"fixed",
      left:"0",
      top:"0"
    }}>

      <h2 style={{
        color:"#d4af37",
        marginBottom:"40px"
      }}>
        ADMIN PANEL
      </h2>

      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:"20px"
      }}>

        <Link to="/admin/dashboard" style={link}>
          Dashboard
        </Link>

        <Link to="/admin/products" style={link}>
          Products
        </Link>

        <Link to="/admin/gallery" style={link}>
          Gallery
        </Link>

        <Link to="/" style={link}>
          Website
        </Link>

      </div>

    </div>

  );

}

const link = {
  color:"white",
  textDecoration:"none",
  fontSize:"18px",
  fontWeight:"bold"
};
