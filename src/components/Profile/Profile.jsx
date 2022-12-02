import "./Profile.css";
import { useState } from "react";
import { Link } from "react-router-dom"
import image from "../Home/Footer/img/back.svg"
import Home_Footer from "../Home/Footer/Home_Footer";
import { verifyUser, deleteUser } from "../../services/apiCalls";
import { useAuthContext } from "../../hooks/useAuthContext.js"
import { useLogout } from '../../hooks/useLogout'

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");     
  const { user, dispatch } = useAuthContext()
  const { log_out } = useLogout()
  
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    if(e.nativeEvent.submitter.id === "delete") {
      const userInfo = await verifyUser(user.token)
      console.log(user.token, userInfo)
      console.log(await deleteUser(userInfo.profile.id, user.token))
      log_out()
      // console.log("logged out")
    } else {
      console.log("redirecting")
    } 
  }

  return (
    <>
      {/* <Link to="/home"><img className="profile-back" src={image} /></Link> */}
      <form onSubmit={handleProfileSubmit}>
      <div className="profile-container">
        <h1>Profile</h1>
        {/* <div className="profile-form"> */}
        {/*     <div className="profile-info"> */}
        {/*       <input */}
        {/*         type="text" */}
        {/*         value={username} */}
        {/*         placeholder="Username" */}
        {/*         name="username" */}
        {/*         id="username" */}
        {/*         onChange={(e) => setUsername(e.target.value)} */}
        {/*       /> */}
        {/*       <input */}
        {/*         type="text" */}
        {/*         value={email} */}
        {/*         placeholder="Email" */}
        {/*         name="email" */}
        {/*         id="email" */}
        {/*         onChange={(e) => setEmail(e.target.value)} */}
        {/*       /> */}
        {/*       <input */}
        {/*         type="password" */}
        {/*         value={password} */}
        {/*         placeholder="Password" */}
        {/*         name="password" */}
        {/*         id="password" */}
        {/*         onChange={(e) => setPassword(e.target.value)} */}
        {/*       /> */}
        {/*       <input */}
        {/*         type="password" */}
        {/*         value={confirmPassword} */}
        {/*         placeholder="Verify Password" */}
        {/*         name="confirmPassword" */}
        {/*         id="confirmPassword" */}
        {/*         onChange={(e) => setConfirmPassword(e.target.value)} */}
        {/*       /> */}
        {/*     </div> */}
        {/* </div> */}
        <button id="delete">Delete Profile?</button>
        {/* <button id="delete"><Link to="/" id="home">Delete Profile?</Link></button> */}
        <Link to="/home" id="home"><img className="profile-back" src={image} /></Link>
      </div>
        </form>
      <Home_Footer />
    </>
  );
}

export default Profile;
