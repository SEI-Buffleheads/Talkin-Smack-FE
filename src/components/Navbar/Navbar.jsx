import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";
<script src="https://kit.fontawesome.com/e3e9f2d35b.js" crossorigin="anonymous"></script>



function Navbar() {
  return (
    <>
      <h1>Hello Navbar</h1>
      <nav>
        <div className="nav-container">
        <i class="fa-regular fa-circle-user"></i>
          <div className="nav-img">🤬</div>
          <Link to="/profile">Profile </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
