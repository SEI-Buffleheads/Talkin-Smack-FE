import './Sign_Up.css';
import { useState } from 'react';

function Sign_Up() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [valid, setValid] = useState('');

  const handleChange = e => {
    if (e.target.id === 'username') {
      setUsername(e.target.value)
    } else if (e.target.id === 'password') {
      setPassword(e.target.value)
    } else if (e.target.id === 'passwordConfirm') {
      setPasswordConfirm(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target[1].value === e.target[2].value ? setValid("Password correct.") : setValid("Try your password again.")
  }

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={handleChange} />
        <input type="password" placeholder="Password" onChange={handleChange} />
        <input type="password" placeholder="Confirm Password" onChange={handleChange} />
        <input type="submit" value="Submit" />
        <h1>{valid}</h1>
      </form>
    </div>
  );
}

export default Sign_Up;
