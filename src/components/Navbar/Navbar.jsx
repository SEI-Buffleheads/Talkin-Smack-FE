import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";
import feed from "../img/feed-vector.svg";
import profile from "../img/profile-vector.svg";
import logout from "../img/logout.svg";
import logo from "../Home/Footer/img/logo.png";
import signin from "../../../src/components/img/login-vector.svg"
import search from "../img/search-vector.svg"
import { useLogout } from '../../hooks/useLogout'
import {useAuthContext} from '../../hooks/useAuthContext'

function Navbar() {
  const { log_out } = useLogout()
  const {user} = useAuthContext()
  
  const handleClick = () => {
    log_out()
  }
  
  return (
    <>
      <nav>
        <div className="nav-div">
          {user && (
            <Link to="/profile">
              <img className="nav-img" src={profile} />
            </Link>
          ) || <Link to="/login">
              <img className="nav-img" src={signin} />
            </Link>}
          <Link to="/home">
            <img className="nav-img" src={feed} />
          </Link>
          {user && (
            <Link to="/">
              <img onClick={handleClick} className="nav-img" src={logout} />
            </Link>
          )}
          <img className="nav-img" src={search} />
          <img className="nav-logo" src={logo} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
