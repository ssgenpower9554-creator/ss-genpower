import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";

function Home() {

  return (
    <div style={{
      background:"#071f18",
      minHeight:"100vh",
      color:"#fff",
      fontFamily:"Arial",
      padding:"30px"
    }}>

      <h1 style={{
        color:"#d9b23f"
      }}>
        SS GENPOWER
      </h1>

      <p>
        Premium Generator Services Website
      </p>

    </div>
  )
}

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/admin-ssgenpower"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
