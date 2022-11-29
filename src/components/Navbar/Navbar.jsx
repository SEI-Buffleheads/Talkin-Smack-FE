import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";
import feed from "../img/feed-vector.svg";
import profile from "../img/profile-vector.svg";
import logout from "../img/logout.svg";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-div">
          <Link to="/profile">
            <img className="nav-img" src={profile} />
          </Link>
          <Link to="/home">
            <img className="nav-img" src={feed} />
          </Link>
          <Link to="/splash">
            <img className="nav-img" src={logout} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
