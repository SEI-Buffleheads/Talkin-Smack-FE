import { useState } from "react";
import Reply_Button from "./Reply_Button";
import "./Smack.css";
import Smack_Comments from "./Smack_Comments";
import Reply from "./Reply";
import { useAuthContext } from "../../hooks/useAuthContext";

function Smack({ users, comments, posts, setToggleApiCall }) {
  const [showReplies, setShowReplies] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false)
  const {user} = useAuthContext()
  let names = [];

  if (!posts) {
    return null;
  }
  if (posts) {
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

  return (
    <div className="smack-container">
      <div className="feed">
        {posts.reverse().map((post, index) => (
          <div className="post-container" id={index}>
            <div className="post">
              <div className="post-header">{names[post.user]} said:</div>
              <div className="post-content">{post.content}</div>
              <div className="post-footer">
                <Reply_Button
                  comments={comments}
                  post={post.id}
                  key={index}
                  setShow={setShowReplies}
                />
                <div></div>
                <button onClick={modalFunc}>reply</button>
              </div>
            </div>
            <Reply index={index} show={showReplyModal} close={() => setShowReplyModal(false)} setToggleApiCall={setToggleApiCall}/>
            <Smack_Comments
              show={showReplies}
              names={names}
              comments={comments}
              post={post.id}
              author={names[post.author]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Smack;
