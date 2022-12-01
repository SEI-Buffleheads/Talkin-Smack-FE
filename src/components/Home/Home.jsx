import "./Home.css";
import { Link, Routes, Route } from "react-router-dom";
import Smack_Feed from "../Smack/Smack_Feed.jsx";
import Talk_Smack from "../Talk_Smack/Talk_Smack.jsx";
import Home_Footer from "./Footer/Home_Footer.jsx";
import { useEffect, useState } from "react";

function Home({ users, comments, posts, setToggleApiCall }) {
  const [showModal, setShowModal] = useState(false);

  setToggleApiCall((prev) => ![prev]);

  const [post, setPost] = useState({
    title: "User said: ",
    content: "",
    author: 5, //i think this should be taken from useParams later when we have authorization
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
    // setToggleApiCall((prev) => !prev);
  };

  return (
    <>
      <div className="home-container">
        <h1>Hello Home</h1>
        <span className="home-talksmack-container">
          <div className="home-talksmack-box">
            <h3 className="home-talksmack-title">Talk Smack</h3>
            <form className="home-talksmack-content" onSubmit={handleSubmit}>
              <textarea
                className="home-talksmack-body"
                placeholder="Smack talking starts here..."
                name="content"
                maxlength="155"
                value={post.content}
                onChange={handleChange}
              />
              <div className="home-talksmack-footer">
                <button onClick={() => setShowModal(true)}>Talk Smack!</button>
                <button className="submit" type="submit">
                  submit
                </button>
              </div>
          </form>
          </div>
          </span>
        <Talk_Smack show={showModal} close={() => setShowModal(false)} />
        <Smack_Feed users={users} comments={comments} posts={posts} />
      </div>
      <Home_Footer />
    </>
  );
}

export default Home;
