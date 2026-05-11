import AdminSidebar from "../components/AdminSidebar";
import { useEffect, useState } from "react";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export default function Products() {

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [products,setProducts] = useState([]);

  const addProduct = async(e) => {

    e.preventDefault();

    await addDoc(
      collection(db,"products"),
      {
        name,
        price
      }
    );

    alert("Product Added");

    setName("");
    setPrice("");

    fetchProducts();

  };

  const fetchProducts = async() => {

    const snapshot = await getDocs(
      collection(db,"products")
    );

    const data = snapshot.docs.map((doc)=>({
      id:doc.id,
      ...doc.data()
    }));

    setProducts(data);

  };

  useEffect(()=>{

    fetchProducts();

  },[]);

  const deleteProduct = async(id) => {

    await deleteDoc(
      doc(db,"products",id)
    );

    fetchProducts();

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
        textAlign:"center",
        color:"#d4af37"
      }}>
        PRODUCT MANAGEMENT
      </h1>

      <form
        onSubmit={addProduct}
        style={{
          maxWidth:"500px",
          margin:"auto",
          marginTop:"40px"
        }}
      >

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={input}
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          style={input}
        />

        <button style={btn}>
          Add Product
        </button>

      </form>

      <div style={{
        marginTop:"50px"
      }}>

        {
          products.map((item)=>(

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

              <p>
                ₹ {item.price}
              </p>

              <button
                onClick={()=>deleteProduct(item.id)}
                style={{
                  padding:"10px 20px",
                  background:"red",
                  color:"white",
                  border:"none",
                  borderRadius:"10px"
                }}
              >
                Delete
              </button>

            </div>

          ))
        }

      </div>

    </div>

  );

}

const input = {
  width:"100%",
  padding:"15px",
  marginTop:"15px",
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
