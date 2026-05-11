import { useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

import app from "../firebase/firebaseConfig";

const auth = getAuth(app);

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const loginUser = async () => {

    try{

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");

    }catch(error){
      alert("Invalid Email or Password");
    }

  };

  return (
    <div style={{
      minHeight:"100vh",
      background:"#071f18",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"Arial"
    }}>

      <div style={{
        background:"#102f27",
        padding:"40px",
        borderRadius:"20px",
        width:"350px"
      }}>

        <h2 style={{
          color:"#d9b23f",
          textAlign:"center",
          marginBottom:"30px"
        }}>
          Admin Login
        </h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={input}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={input}
        />

        <button
          onClick={loginUser}
          style={{
            width:"100%",
            padding:"15px",
            background:"#d9b23f",
            border:"none",
            borderRadius:"10px",
            fontWeight:"bold",
            cursor:"pointer"
          }}
        >
          Login
        </button>

      </div>

    </div>
  )
}

const input = {
  width:"100%",
  padding:"15px",
  marginBottom:"15px",
  borderRadius:"10px",
  border:"none"
}

export default Login
