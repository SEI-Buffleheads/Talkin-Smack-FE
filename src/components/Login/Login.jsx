import './Login.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login() {
  return (
    <>
      <div className="signIn-container">
      <div className="signIn-form">
        <h1>Sign In</h1>
          <form className="signIn">
            <div className='signInInput username_input'>
              <label>Username:</label>
              <input
                type="text"
                // value={username}
                placeholder="Username"
                name="username"
                id="username"
                // onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='signInInput password-input'>
            <label>Password</label>
            <input
              // value={password}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              autoComplete="on"
              // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
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
