import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";
import feed from "../img/feed-vector.svg";
import profile from "../img/profile-vector.svg";
import logout from "../img/logout.svg";
import logo from "../Home/Footer/img/logo.png";
import {useLogout} from '../../hooks/useLogout'

function Navbar() {
  const { log_out } = useLogout()
  
  const handleClick = () => {
    log_out()
  }
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
          <Link to="/">
            <img onClick={handleClick} className="nav-img" src={logout} />
          </Link>
          <img className="nav-logo" src={logo} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
