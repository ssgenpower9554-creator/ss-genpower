function Gallery() {
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
        IMAGE GALLERY
      </h1>

      <input type="file" />

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#01251d",
            height: "150px",
            borderRadius: "15px",
          }}
        ></div>

        <div
          style={{
            background: "#01251d",
            height: "150px",
            borderRadius: "15px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Gallery;
