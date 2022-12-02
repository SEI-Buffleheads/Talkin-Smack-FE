import './Smack.css'
import React from 'react'
// import * as ReactDOM from "react-dom";
// import { CSSTransition } from "react-transition-group";
// import Reply_Button from './Reply_Button';

export default function Smack_Comments({ users, comments, post, author, show }) {
  if (!show) return null
  
  let replies = []
  for (let comment in comments) {
    if (comments[comment].post == post) {
       replies.push(comments[comment])
    } 
  }
  
  return (
    <div className="comments">
      {comments.map((comment) => {
        if (post !== comment.post){
          return
        }
        const commentUser = users.filter(user => {
          if (user.id === comment.user){ 
            return user.name[0]
          }}) 
        const userName = commentUser[0].name
        return(
        <div className="reply">
          <div className="reply-header">
              {userName} replied:
          </div>
          <div className="reply-content">{comment.content}</div>
          <div className="reply-footer">
            <div></div>
            <div></div>
            {/* <button>reply</button> */}
          </div>
        </div>
      )})}
    </div>
  );
}

