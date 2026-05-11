import { useState } from "react";

export default function Gallery() {

  const [preview,setPreview] = useState("");

  const showImage = (e) => {

    const file = e.target.files[0];

    if(file){

      const url = URL.createObjectURL(file);

      setPreview(url);

    }

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
        IMAGE GALLERY
      </h1>

      <input
        type="file"
        onChange={showImage}
        style={{
          marginTop:"30px"
        }}
      />

      {
        preview && (

          <div style={{
            marginTop:"30px"
          }}>

            <img
              src={preview}
              alt=""
              style={{
                width:"100%",
                maxWidth:"400px",
                borderRadius:"20px"
              }}
            />

          </div>

        )
      }

    </div>

  );

}
