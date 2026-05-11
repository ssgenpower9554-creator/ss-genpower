export default function Gallery() {

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
        style={{
          marginTop:"30px"
        }}
      />

    </div>

  );

}
