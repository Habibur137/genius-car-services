import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Home from "./Pages/Home/Home/Home";
import ServiceDetail from "./Pages/Home/ServiceDetai/ServiceDetail";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Footer from "./Pages/Shered/Footer";
import Header from "./Pages/Shered/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
