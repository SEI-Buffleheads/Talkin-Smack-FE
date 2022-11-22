import './Home.css';
import { Link, Routes, Route } from "react-router-dom"
import Smack from "../Smack/Smack.jsx"
import Talk_Smack from "../Talk_Smack/Talk_Smack.jsx"

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
    </>
  );
}

export default Home;
