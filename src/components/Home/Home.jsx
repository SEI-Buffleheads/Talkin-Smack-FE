import "./Home.css";
import Search from '../Search/Search';
import Smack_Feed from "../Smack/Smack_Feed.jsx";
import Talk_Smack from "../Talk_Smack/Talk_Smack.jsx";
import Home_Footer from "./Footer/Home_Footer.jsx";
import { useEffect, useState } from "react";
import {useAuthContext} from '../../hooks/useAuthContext'

function Home({ users, comments, posts, setToggleApiCall }) {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('')
  const {user} = useAuthContext()

  setToggleApiCall((prev) => ![prev]);

  const [post, setPost] = useState({
    title: "User said: ",
    content: "",
    author: 5, //verify should send back an id 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await createPost(post);
    setToggleApiCall((prev) => !prev);
  };

  const modalFunc = () => {
    if (!user) {
      return alert("you must sign in to talk schmack")
    }
    setShowModal(true)
  }

  return (
    <>
      <div className="home-container">
        {/* <Search setSearch={setSearch} /> */}
        <div className="home-talksmack-footer">
                <button className="smack-modal-button" onClick={modalFunc}>💥Click to Shmack💥</button>
        </div>
        <Talk_Smack show={showModal} close={() => setShowModal(false)} setToggleApiCall={setToggleApiCall} />
        <Smack_Feed users={users} comments={comments} posts={posts} setToggleApiCall={setToggleApiCall} />
      </div>
      <Home_Footer />
    </>
  );
}

export default Home;
