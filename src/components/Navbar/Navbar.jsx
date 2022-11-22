import './Navbar.css';
import { Link, Routes, Route } from "react-router-dom"

function Navbar() {
  return (
    <>
      <h1>Hello Navbar</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </>
  );
}

export default Navbar;
