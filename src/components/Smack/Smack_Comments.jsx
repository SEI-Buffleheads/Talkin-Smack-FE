import './Smack.css'
import React from 'react'
import * as ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Reply_Button from './Reply_Button';

export default function Smack_Comments({ names, comments, post, author, show }) {
  if (!show) return null
  
  let replies = []
  for (let comment in comments) {
    if (comments[comment].post == post) {
       replies.push(comments[comment])
    } 
  }
  
  return (
    <div className="comments">
      {replies.map((reply) => (
        <div className="reply">
          <div className="reply-header">
            {names[reply.author]} responded to {author}:
          </div>
          <div className="reply-content">{reply.body}</div>
          <div className="reply-footer">
            <div></div>
            <div></div>
            <button>reply</button>
          </div>
        </div>
      ))}
    </div>
  );
}

