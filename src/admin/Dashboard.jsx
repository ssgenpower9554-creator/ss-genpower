import AdminSidebar from "../components/AdminSidebar";
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

  const fetchEnquiries = async() => {

    try {

      const snapshot = await getDocs(
        collection(db,"enquiries")
      );

      const data = snapshot.docs.map((doc)=>({

        id:doc.id,
        ...doc.data()

      }));

      setEnquiries(data);

    } catch(error) {

      console.log(error);

    }

  };

  useEffect(()=>{

    fetchEnquiries();

  },[]);

  const deleteEnquiry = async(id) => {

    await deleteDoc(
      doc(db,"enquiries",id)
    );

    fetchEnquiries();

  };

  return (
    <AdminSidebar />

    <div style={{
      minHeight:"100vh",
      background:"#001a14",
      color:"white",
      padding:"20px"
    }}>

      <h1 style={{
        color:"#d4af37",
        textAlign:"center",
        marginBottom:"30px"
      }}>
        ADMIN DASHBOARD
      </h1>

      {

        enquiries.length === 0 ?

        (

          <h2 style={{
            textAlign:"center",
            color:"#ccc"
          }}>
            No Enquiries Found
          </h2>

        )

        :

        enquiries.map((item)=>(

          <div
            key={item.id}
            style={{
              background:"#01251d",
              padding:"20px",
              borderRadius:"20px",
              marginBottom:"20px"
            }}
          >

            <h2>{item.name}</h2>

            <p>
              <b>Phone:</b> {item.phone}
            </p>

            <p>
              <b>Message:</b> {item.message}
            </p>

            <button
              onClick={()=>deleteEnquiry(item.id)}
              style={{
                marginTop:"15px",
                background:"red",
                color:"white",
                border:"none",
                padding:"10px 20px",
                borderRadius:"10px"
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
