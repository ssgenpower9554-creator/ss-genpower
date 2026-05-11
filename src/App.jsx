import { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc
} from "firebase/firestore";

import app from "./firebase/firebaseConfig";

const db = getFirestore(app);

function App() {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");

  const submitForm = async () => {

    if(!name || !phone || !message){
      alert("Please fill all fields");
      return;
    }

    try{

      await addDoc(collection(db,"enquiries"),{
        name,
        phone,
        message,
        createdAt:new Date()
      });

      alert("Enquiry Submitted Successfully");

      setName("");
      setPhone("");
      setMessage("");

    }catch(error){
      alert("Error");
    }

  };

  return (
    <div style={{
      background:"#071f18",
      minHeight:"100vh",
      color:"#fff",
      fontFamily:"Arial",
      padding:"20px"
    }}>

      <h1 style={{
        textAlign:"center",
        color:"#d9b23f",
        marginTop:"20px"
      }}>
        SS GENPOWER
      </h1>

      <p style={{
        textAlign:"center",
        color:"#ccc"
      }}>
        Generator Sales • Repair • Installation
      </p>

      <div style={{
        maxWidth:"500px",
        margin:"40px auto",
        background:"#102f27",
        padding:"30px",
        borderRadius:"20px"
      }}>

        <h2 style={{
          textAlign:"center",
          marginBottom:"20px"
        }}>
          Enquiry Form
        </h2>

        <input
          placeholder="Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={input}
        />

        <input
          placeholder="Mobile Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          style={input}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          style={{
            ...input,
            height:"120px"
          }}
        />

        <button
          onClick={submitForm}
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
          Submit Enquiry
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
  border:"none",
  outline:"none"
}

export default App
