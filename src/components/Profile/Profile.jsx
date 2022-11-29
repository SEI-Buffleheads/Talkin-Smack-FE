import "./Profile.css";
import { useState } from "react";
import { Link } from "react-router-dom"
import image from "../Home/Footer/img/back.svg"

function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");     
  
  function handleProfileSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      {/* <Link to="/home"><img className="profile-back" src={image} /></Link> */}
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-form">
          <form className="profile-info" onSubmit={handleProfileSubmit}>
            <input
              type="text"
              value={username}
              placeholder="Username"
              name="username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              value={confirmPassword}
              placeholder="Verify Password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </form>
        </div>
        <button>Update</button>
        <Link to="/home"><img className="profile-back" src={image} /></Link>
      </div>
    </>
  );
}

export default Profile;
