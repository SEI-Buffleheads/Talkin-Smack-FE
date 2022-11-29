import "./App.css";
import Splash from "./components/Splash/Splash.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import SignUp from "./components/Sign_Up/Sign_Up.jsx";
import { useParams, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUsers, getComments, getPosts } from "./services/apiCalls";

function App() {
  const [posts, setPosts] = useState({});
  const [comments, setComments] = useState({});
  const [users, setUsers] = useState({});
  const [toggleApiCall, setToggleApiCall] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      const response = await getUsers();
      setUsers(response);
      const res = await getComments();
      setComments(res);
      const res2 = await getPosts();
      setPosts(res2);
      await console.log(users, comments, posts)
    };
    callApi();
  }, [toggleApiCall]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route
          path="/home"
          element={<Home />}
          comments={comments}
          posts={posts}
          setToggleApiCall={setToggleApiCall}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
