import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

function Dashboard() {
  const [enquiries, setEnquiries] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "enquiries"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setEnquiries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteEnquiry = async (id) => {
    await deleteDoc(doc(db, "enquiries", id));
    fetchData();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#001a14",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#d4af37",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        SS GENPOWER ADMIN DASHBOARD
      </h1>

      {enquiries.length === 0 ? (
        <p>No enquiries found</p>
      ) : (
        enquiries.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#01251d",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "20px",
              boxShadow: "0 0 10px rgba(0,0,0,0.4)",
            }}
          >
            <h3>{item.name}</h3>

            <p>
              <b>Phone:</b> {item.phone}
            </p>

            <p>
              <b>Message:</b> {item.message}
            </p>

            <button
              onClick={() => deleteEnquiry(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
