import './Home.css';
import { Link, Routes, Route } from "react-router-dom"
import Smack from "../Smack/Smack.jsx"
import Talk_Smack from "../Talk_Smack/Talk_Smack.jsx"
import Home_Footer from "./Footer/Home_Footer.jsx"
import { useEffect, useState } from 'react';

function Home({ comments, posts, setToggleApiCall }) {
  const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    return
    setToggleApiCall((prev) => !prev)
  }, [])
  console.log(comments)
  return (
    <>
      <h1>Hello Home</h1>
      <button onClick={() => setShowModal(true)}>Talk Smack!</button>
      <Talk_Smack setToggleApiCall={setToggleApiCall} show={showModal} close={() => setShowModal(false)} />
      {/* <Smack comments={comments} posts={posts} /> */}
      <Home_Footer />
    </>
  );
}

export default Home;
