import './Smack.css';

function Smack({ users, comments, posts }) {
  let names = []

  if (!posts){
    return null
  }
  if (posts){
    console.log(users, posts)
    names.push('nothing')
    for (let user in users) {
      names.push(users[user].username)
    }
  }


  return (
    <div className='feed'>{posts.map((post) => (
      <div className='post'>
        <div className='post-header'>{names[post.author]} said:</div>
        <div className='post-content'>{post.content}</div>
        <div className='post-footer'>
          <button>show replies</button>
          <div></div>
          <button>reply</button>
        </div>
      </div>
    ))}

    </div>
  );
}

export default Smack;
