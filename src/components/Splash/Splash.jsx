import "./Splash.css";
import Splash_Footer from "./Footer/Splash_Footer.jsx";
import { Link, Routes, Route } from "react-router-dom";

function Splash() {
  return (
    <div className="splash-wrapper">
      <div className="splash-div">
        <h1>Talkin-Schmack</h1>
        <p>Why have a conversation, when you could just Schmack em'</p>
        <Splash_Footer />
      </div>
    </div>
  );
}


export default Splash;
