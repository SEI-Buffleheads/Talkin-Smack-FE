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

//   if (!user) {
//   setTimeout(() => {
//     setShowModal(true)
//   }, 1000);
// }

  return (
    <>
      <div className="home-container">
        <Search setSearch={setSearch} />
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
        <Talk_Smack show={showModal} close={() => setShowModal(false)} setToggleApiCall={setToggleApiCall} />
        <Smack_Feed users={users} comments={comments} posts={posts} />
      </div>
      <Home_Footer />
    </>
  );
}

export default Home;
