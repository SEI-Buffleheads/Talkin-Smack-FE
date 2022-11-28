import "./Login.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sign_Up from "../Sign_Up/Sign_Up";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState('Sign Up')
  const [title, setTitle] = useState('Sign In')
  const [flip, setFlip] = useState({ transform: "rotateY(0deg)" });
  const [signUpPage, setSignUpPage] = useState({ "z-index": "-1" });
  const [toggle, setToggle] = useState(false);

  function toggleFlip() {
    if (toggle === true) {
      setFlip({ transform: "rotateY(0deg)" });
      setSignUpPage({ "z-index": "-1" });
      setBtn("Sign Up")
      setTitle("Sign In")
    } else {
      setFlip({ transform: "rotateY(180deg)" });
      setSignUpPage({ "z-index": "2" });
      setBtn("Back")
      setTitle("Sign Up")
    }
    setToggle((prevCheck) => !prevCheck);
  }

  function handleSignInSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="signIn-container">
          <h1>{title}</h1>
        <div className="signIn-form" style={flip}>
          <form className="signIn" onSubmit={handleSignInSubmit}>
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
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" className="login-btn" value="Sign In" />
          </form>
          <div className="signUp-form" style={signUpPage}>
            <Sign_Up />
          </div>
          {/* <Link to="/signup" className='create-accnt-btn'> */}
          {/* </Link> */}
        </div>
        <button onClick={toggleFlip}>{btn}</button>
      </div>
    </>
  );
}

export default Login;
