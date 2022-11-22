import './Profile.css';
import { useState } from 'react';

function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleProfileSubmit(e) {
    e.preventDefault()
  }
  return (
    <>
      <div className='profile-container'>
        <div className='user-avatar'>
          <div className='avatar-img'>😱</div>
          <button>Edit</button>
        </div>
        <form className='profile-info' onSubmit={handleProfileSubmit}>
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
            placeholder='Password'
            name='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            value={confirmPassword}
            placeholder='Verify Password'
            name='confirm-password'
            id='confirm-password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </form>
        <button>Update</button>
      </div>
    </>
  );
}

export default Profile;
