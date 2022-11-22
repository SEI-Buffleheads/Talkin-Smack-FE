import './Home.css';
import { Link, Routes, Route } from "react-router-dom"
import Smack from "../Smack/Smack.jsx"
import Talk_Smack from "../Talk_Smack/Talk_Smack.jsx"
import Home_Footer from "./Footer/Home_Footer.jsx"

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
      <Home_Footer />
    </>
  );
}

export default Home;
