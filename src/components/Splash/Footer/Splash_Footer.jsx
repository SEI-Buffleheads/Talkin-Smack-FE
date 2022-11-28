import "./Splash_Footer.css";
import { Link, Routes, Route } from "react-router-dom";

function Splash_Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-buttons">
          <Link to="/signup">
            <button className="footer-btn">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="footer-btn">Log In</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Splash_Footer;
