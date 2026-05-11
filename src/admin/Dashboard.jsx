import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export default function Dashboard() {

  const [enquiries,setEnquiries] = useState([]);

  const fetchData = async() => {

    const snapshot = await getDocs(
      collection(db,"enquiries")
    );

    const data = snapshot.docs.map((doc)=>({
      id:doc.id,
      ...doc.data()
    }));

    setEnquiries(data);

  };

  useEffect(()=>{

    fetchData();

  },[]);

  const deleteEnquiry = async(id) => {

    await deleteDoc(
      doc(db,"enquiries",id)
    );

    fetchData();

  };

  return (

    <div style={{
      minHeight:"100vh",
      background:"#001a14",
      color:"white",
      padding:"20px"
    }}>

      <h1 style={{
        color:"#d4af37",
        textAlign:"center"
      }}>
        ADMIN DASHBOARD
      </h1>

      {
        enquiries.map((item)=>(

          <div
            key={item.id}
            style={{
              background:"#01251d",
              padding:"20px",
              borderRadius:"15px",
              marginTop:"20px"
            }}
          >

            <h2>{item.name}</h2>

            <p>{item.phone}</p>

            <p>{item.message}</p>

            <button
              onClick={()=>deleteEnquiry(item.id)}
              style={{
                padding:"10px 20px",
                background:"red",
                border:"none",
                borderRadius:"10px",
                color:"white"
              }}
            >
              Delete
            </button>

          </div>

        ))
      }

    </div>

  );

}
