import "./Home_Footer.css"
import { Link, Routes, Route } from "react-router-dom"
import logo from "./img/logo.png"

function Home_Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <Link to="/home"><img className="footer-logo" src={logo} alt="logo"/></Link>
          <div className="footer-btn-div">
            <button><Link to="/profile" className="footer-btn">Profile</Link></button>
            <button><Link to="/" className="footer-btn">Sign Out</Link></button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home_Footer;
