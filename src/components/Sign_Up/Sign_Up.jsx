import "./Sign_Up.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createUser } from "../../services/apiCalls";
import { useSignup } from "../../hooks/useSignup";

function Sign_Up() {
  const { signup, error, isLoading } = useSignup();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(user);
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="sign-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={handleChange}
              id="username"
            />
            <input
              type="text"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              id="email"
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              id="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={user.passwordConfirm}
              onChange={handleChange}
              id="re_password"
            />
            <div className="form-bottom">
              <input type="submit" value="Submit" disabled={isLoading} />
              {error && <div className="error">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign_Up;
