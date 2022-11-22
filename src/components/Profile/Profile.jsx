import './Profile.css';
import { useState } from 'react';

function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <div className='profile-container'>
        <div className='user-avatar'>
          <div className='avatar-img'>😱</div>
          <button>Edit</button>
        </div>
        <form className='profile-info'>
        <input
          type="text"
          // value={username}
          placeholder="Username"
          name="username"
          id="username"
          // onChange={(e) => setUsername(e.target.value)}
          />
        <input 
            type="text"
            placeholder='Password'
            name='password'
            id='password'
          />
          <input
            type="text"
            placeholder='Verify Password'
            name='confirm-password'
            id='confirm-password'
          />
        </form>
        <button>Update</button>
      </div>
    </>
  );
}

export default Profile;
