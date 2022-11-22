import "./Home_Footer.css"
import { Link, Routes, Route } from "react-router-dom"
function Home_Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-img">🤬</div>
          <Link to="/profile">Profile </Link>
          <Link to="/splash">Sign Out </Link>
        </div>
      </footer>
    </>
  );
}

export default Home_Footer;
