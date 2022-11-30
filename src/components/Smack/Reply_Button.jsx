import React from 'react'

export default function Reply_Button({ comments, post, setShow }) {

  let replies = [];
  for (let comment in comments) {
    if (comments[comment].post == post) {
      replies.push(comments[comment]);
    }
  }

  const handleClick = (e) => {
    console.log(e)
    setShow((prev)=>!prev)
  }
  
  if (replies.length == 0) return <div></div>
  if (replies.length == 1) return (
    <button value={post} onClick={handleClick}>comments</button>
  )
  
  return (
    <button onClick={handleClick}>comments</button>
  )
}