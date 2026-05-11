function Dashboard() {

  return (
    <div style={{
      minHeight:"100vh",
      background:"#071f18",
      color:"#fff",
      fontFamily:"Arial",
      padding:"30px"
    }}>

      <h1 style={{
        color:"#d9b23f",
        marginBottom:"30px"
      }}>
        Admin Dashboard
      </h1>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"20px"
      }}>

        <div style={card}>
          <h2>Total Enquiries</h2>
          <p>0</p>
        </div>

        <div style={card}>
          <h2>Gallery Images</h2>
          <p>0</p>
        </div>

        <div style={card}>
          <h2>Products</h2>
          <p>0</p>
        </div>

      </div>

    </div>
  )
}

const card = {
  background:"#102f27",
  padding:"30px",
  borderRadius:"20px"
}

export default Dashboard
