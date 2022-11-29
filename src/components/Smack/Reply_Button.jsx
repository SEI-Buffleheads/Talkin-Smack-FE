import React from 'react'

export default function Reply_Button({ comments, post }) {

  let replies = [];
  for (let comment in comments) {
    if (comments[comment].post == post) {
      replies.push(comments[comment]);
    }
  }
  
  if (replies.length == 0) return <div></div>
  if (replies.length == 1) return (
    <button>show reply</button>
  )
  
  return (
    <button>show replies</button>
  )
}