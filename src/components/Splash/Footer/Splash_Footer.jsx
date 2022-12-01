import "./Splash_Footer.css";
import { Link, Routes, Route } from "react-router-dom";

function Splash_Footer() {
  return (
    <>
      <div className="splash-footer-container">
        <div className="splash-footer-buttons">
          <Link to="/signup">
            <button className="splash-footer-btn">Sign Up</button>
          </Link> 
          <Link to="/login">
            <button className="splash-footer-btn">Log In</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Splash_Footer;
