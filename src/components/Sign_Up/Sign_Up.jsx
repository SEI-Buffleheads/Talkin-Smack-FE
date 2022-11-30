import './Sign_Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUser } from "../../services/apiCalls";

function Sign_Up() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    if (e.target.id === 'username') {
      setUsername(e.target.value)
    } else if (e.target.id === 'email') {
      setEmail(e.target.value)
    } else if (e.target.id === 'password') {
      setPassword(e.target.value)
    } else if (e.target.id === 're_password') {
      setPasswordConfirm(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUser(username, email, password, passwordConfirm)
    navigate("/home");
  }

  return (
    <div className="form-container">
      <div className="form">
        <div className="sign-form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" onChange={handleChange} id="username" />
          <input type="text" placeholder="Email" onChange={handleChange} id="email" />
          <input type="password" placeholder="Password" onChange={handleChange} id="password" />
          <input type="password" placeholder="Confirm Password" onChange={handleChange} id="re_password" />
          <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    </div>
  );
}

export default Sign_Up;
