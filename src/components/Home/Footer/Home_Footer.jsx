import "./Home_Footer.css"
import { Link, Routes, Route } from "react-router-dom"
function Home_Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-img">🤬</div>
          <div className="footer-btn-div"><Link to="/profile"><button className="footer-btn">Profile</button></Link>
          <Link to="/splash"><button className="footer-btn">Sign Out</button></Link></div>
        </div>
      </footer>
    </>
  );
}

export default Home_Footer;
