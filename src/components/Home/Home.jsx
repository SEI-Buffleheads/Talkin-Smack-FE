import './Home.css';
import { Link, Routes, Route } from "react-router-dom"
import Smack from "../Smack/Smack.jsx"
import Talk_Smack from "../Talk_Smack/Talk_Smack.jsx"
import Navbar from "../Navbar/Navbar.jsx"

function Home() {
  return (
    <>
      <h1>Hello Home</h1>
      <button>Talk Smack!</button>
      <Routes>
        <Route path="/talksmack" element={<Talk_Smack />} />
      </Routes>
      <Talk_Smack />
      <Smack />
      <footer>
        <div className="footer-container">
          <div className="footer-img">🤬</div>
          <Link to="/profile">Profile </Link>
        </div>
      </footer>
    </>
  );
}

export default Home;
