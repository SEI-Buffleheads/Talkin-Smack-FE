import './App.css';
import Splash from "./components/Splash/Splash.jsx"
import Home from "./components/Home/Home.jsx"
import Login from "./components/Login/Login.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Profile from "./components/Profile/Profile.jsx"
import SignUp from "./components/Sign_Up/Sign_Up.jsx"
import { /* Link, */ Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
