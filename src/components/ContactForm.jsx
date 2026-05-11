import { useState } from "react";

import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export default function ContactForm() {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [message,setMessage] = useState("");

  const submitForm = async(e) => {

    e.preventDefault();

    await addDoc(
      collection(db,"enquiries"),
      {
        name,
        phone,
        message,
        createdAt:new Date()
      }
    );

    alert("Enquiry Sent");

    setName("");
    setPhone("");
    setMessage("");

  };

  return (

    <form
      onSubmit={submitForm}
      style={{
        maxWidth:"500px",
        margin:"auto",
        marginTop:"40px"
      }}
    >

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={input}
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        style={input}
      />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        style={textarea}
      />

      <button style={btn}>
        Send Enquiry
      </button>

    </form>

  );

}

const input = {
  width:"100%",
  padding:"15px",
  marginTop:"15px",
  border:"none",
  borderRadius:"10px"
};

const textarea = {
  width:"100%",
  padding:"15px",
  marginTop:"15px",
  border:"none",
  borderRadius:"10px",
  height:"120px"
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
