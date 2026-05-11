function Login() {

  return (
    <div style={{
      minHeight:"100vh",
      background:"#071f18",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"Arial"
    }}>

      <div style={{
        background:"#102f27",
        padding:"40px",
        borderRadius:"20px",
        width:"350px"
      }}>

        <h2 style={{
          color:"#d9b23f",
          textAlign:"center",
          marginBottom:"30px"
        }}>
          Admin Login
        </h2>

        <input
          placeholder="Email"
          style={input}
        />

        <input
          placeholder="Password"
          type="password"
          style={input}
        />

        <button style={{
          width:"100%",
          padding:"15px",
          background:"#d9b23f",
          border:"none",
          borderRadius:"10px",
          fontWeight:"bold"
        }}>
          Login
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
  border:"none"
}

export default Login
