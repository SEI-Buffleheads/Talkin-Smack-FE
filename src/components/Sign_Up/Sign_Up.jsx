import './Sign_Up.css';
import { useState, useNavigate } from 'react';

function Sign_Up() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleChange = e => {
    if (e.target.id === 'username') {
      setUsername(e.target.value)
    } else if (e.target.id === 'email') {
      setEmail(e.target.value)
    } else if (e.target.id === 'password') {
      setPassword(e.target.value)
    } else if (e.target.id === 'confirm_password') {
      setPasswordConfirm(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // code goes here
  }

  return (
    <div className="form-container">
      <div className="form">
        {/* <h1>Sign Up</h1> */}
        <div className="sign-form">
          <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" onChange={handleChange} id="username" />
          <input type="text" placeholder="Email" onChange={handleChange} id="email" />
          <input type="password" placeholder="Password" onChange={handleChange} id="password" />
          <input type="password" placeholder="Confirm Password" onChange={handleChange} id="confirm_password" />
          <input type="submit" value="Submit" />
          </form>
          </div>
      </div>
    </div>
  );
}

export default Sign_Up;
