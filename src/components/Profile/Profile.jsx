import './Profile.css';

function Profile() {
  return (
    <>
      <div className='profile-container'>
        <div className='user-avatar'>
          <div className='avatar-img'>😱</div>
          <button>Edit</button>
        </div>
        <div className='profile-info'>
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
        </div>
        <button>Update</button>
      </div>
    </>
  );
}

export default Profile;
