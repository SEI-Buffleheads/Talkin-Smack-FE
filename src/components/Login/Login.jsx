import './Login.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSignInSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="signIn-container">
        <div className="signIn-form">
          <h1>Sign In</h1>
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
            <Link to="/home">
              <button>Login</button>
              </Link>
        </form>
        <Link to="/signup">
          <button className="create-account-btn">Create account</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Login;
