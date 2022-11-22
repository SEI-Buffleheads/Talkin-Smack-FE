import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h1>Hello Navbar</h1>
      <nav>
        {/* <Link to="/login">Login </Link>
        <Link to="/signup">Sign Up </Link>  */}
        <div className="nav-container">
          <div className="nav-img">🤬</div>
          <Link to="/profile">Profile </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
