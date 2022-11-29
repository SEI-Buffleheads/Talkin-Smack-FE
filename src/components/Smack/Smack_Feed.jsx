import { useState } from 'react';
import Reply_Button from './Reply_Button';
import './Smack.css';
import Smack_Comments from './Smack_Comments'

function Smack({ users, comments, posts }) {
  const [showReplies, setShowReplies] = useState(false);
  let names = []

  if (!posts){
    return null
  }
  if (posts){
    names.push('nothing')
    for (let user in users) {
      names.push(users[user].username)
    }

  }


  return (
    <div className='smack-container'>
      <div className='feed'>{posts.map((post, index) => (
        <div className='post-container'>
          <div className='post'>
            <div className='post-header'>{names[post.author]} said:</div>
            <div className='post-content'>{post.content}</div>
            <div className='post-footer'>
              <Reply_Button comments={comments} post={post.id} key={index} setShow={setShowReplies} />
              <div></div>
              <button>reply</button>
            </div>
          </div>
          <Smack_Comments show={showReplies} names={names} comments={comments} post={post.id} author={names[post.author]} />
        </div>
      ))}
  
      </div>
    </div>
  );
}

export default Smack;
