import "./Splash_Footer.css"
import { Link, Routes, Route } from "react-router-dom"

function Splash_Footer() {
  return (
    <>
      <div className="footer-container">
        <Link to="/Sign Up">Sign Up </Link>
        <Link to="/Log In">Log In </Link>
      </div>
    </>
  );
}

export default Splash_Footer;
