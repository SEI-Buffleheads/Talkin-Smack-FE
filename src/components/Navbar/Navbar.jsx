import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/splash"> Splash </Link>
        <Link to="/home"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Sign Up </Link>
        <Link to="/profile"> Profle </Link>
      </nav>
    </>
  );
}

export default Navbar;
