import { useState } from "react";
import Reply_Button from "./Reply_Button";
import "./Smack.css";
import Smack_Comments from "./Smack_Comments";
import Reply from "./Reply";
import { useAuthContext } from "../../hooks/useAuthContext";

function Smack({ users, comments, posts, setToggleApiCall }) {
  const [showReplies, setShowReplies] = useState(true);
  const [showReplyModal, setShowReplyModal] = useState(false)
  const {user} = useAuthContext()
  let names = [];

  if (!posts) {
    return null;
  }
  if (posts) {
    // posts.reverse()
    names.push("nothing");
    for (let user in users) {
      names.push(users[user].name);
    }
  }

  const modalFunc = () => {
    if (!user) {
      return alert("you must sign in to talk schmack");
    }
    setShowReplyModal(true);
  };

  console.log(comments)
  return (
    <div className='smack-container'>
      <div className='feed'>{posts.map((post, index) => {
        const postUser = users.filter(user => {
          if (user.id === post.user){ 
            return user.name[0]
          }}) 
        const userName = postUser[0].name
        return (
        <div className='post-container' key={index}>
          <div className='post'>
            <div className='post-header'>{userName} said:</div>
            <div className='post-content'>{post.content}</div>
            <div className='post-footer'>
              <Reply_Button comments={comments} post={post.id} key={index} setShow={setShowReplies} />
              <div></div>
              <button>reply</button>
            </div>
            <Reply index={index} show={showReplyModal} close={() => setShowReplyModal(false)} setToggleApiCall={setToggleApiCall}/>
            <Smack_Comments
              show={showReplies}
              users={users}
              comments={comments}
              post={post.id}
              author={userName}
            />
          </div>
          </div>
        )})}
      </div>
    </div>
  );
}

export default Smack;
