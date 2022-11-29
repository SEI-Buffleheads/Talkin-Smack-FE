import "./Home_Footer.css"
import { Link, Routes, Route } from "react-router-dom"
import image from "./img/logo.png"

function Home_Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <img className="footer-img" src={image} alt="logo"/>
          <div className="footer-btn-div"><Link to="/profile"><button>Profile</button></Link>
          <Link to="/splash"><button>Sign Out</button></Link></div>
        </div>
      </footer>
    </>
  );
}

export default Home_Footer;
