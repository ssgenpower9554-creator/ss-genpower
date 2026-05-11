import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const loginUser = async(e) => {

    e.preventDefault();

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");

      navigate("/admin/dashboard");

    } catch(error) {

      alert(error.message);

    }

  };

  return (

    <div style={{
      minHeight:"100vh",
      background:"#001a14",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>

      <form
        onSubmit={loginUser}
        style={{
          width:"350px",
          background:"#01251d",
          padding:"30px",
          borderRadius:"20px"
        }}
      >

        <h1 style={{
          color:"#d4af37",
          textAlign:"center"
        }}>
          ADMIN LOGIN
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={input}
        />

        <button style={btn}>
          Login
        </button>

      </form>

    </div>

  );

}

const input = {
  width:"100%",
  padding:"15px",
  marginTop:"20px",
  border:"none",
  borderRadius:"10px"
};

const btn = {
  width:"100%",
  padding:"15px",
  marginTop:"20px",
  background:"#d4af37",
  border:"none",
  borderRadius:"10px",
  fontWeight:"bold"
};
