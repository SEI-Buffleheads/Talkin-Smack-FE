import './Home.css';
import { Link, Routes, Route } from "react-router-dom"
import Smack from "../Smack/Smack.jsx"
import TalkSmack from "../TalkSmack/TalkSmack.jsx"

function Home() {
  return (
    <>
      <h1>Hello Home</h1>
      <button>Talk Smack!</button>
      <Routes>
        <Route path="/talksmack" element={<TalkSmack />} />
      </Routes>
      <TalkSmack />
      <Smack />
    </>
  );
}

export default Home;
