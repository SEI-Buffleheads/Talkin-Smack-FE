import "./Home.css";
import { Link, Routes, Route } from "react-router-dom";
import Smack_Feed from "../Smack/Smack_Feed.jsx";
import Talk_Smack from "../Talk_Smack/Talk_Smack.jsx";
import Home_Footer from "./Footer/Home_Footer.jsx";
import { useEffect, useState } from "react";

function Home({ users, comments, posts, setToggleApiCall }) {
  const [showModal, setShowModal] = useState(false)
  


  return (
    <>
      <div className="home-container">
        <h1>Hello Home</h1>
        <button onClick={() => setShowModal(true)}>Talk Smack!</button>
        <Talk_Smack show={showModal} close={() => setShowModal(false)} />
        <Smack_Feed users={users} comments={comments} posts={posts} />
      </div>
      <Home_Footer />
    </>
  );
}

export default Home;
