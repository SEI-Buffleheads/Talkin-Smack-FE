import "./App.css";
import Splash from "./components/Splash/Splash.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Sign_Up from "./components/Sign_Up/Sign_Up.jsx";
import { useParams, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers, getComments, getCommentsOnPost, getPosts } from "./services/apiCalls";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentsOnPost, setCommentsOnPost] = useState([]);
  const [users, setUsers] = useState([]);
  const [toggleApiCall, setToggleApiCall] = useState(false);


  useEffect(() => {
    const callApi = async () => {
      const response = await getUsers();
      setUsers(response);
      const res = await getComments();
      setComments(res);
      const res2 = await getPosts();
      setPosts(res2.reverse());
      console.log('api called')
    };
    callApi();
  }, [toggleApiCall]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route
          path="/home"
          element={
            <Home
              comments={comments}
              posts={posts}
              users={users}
              setToggleApiCall={setToggleApiCall}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
