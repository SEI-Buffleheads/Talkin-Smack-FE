import './Smack.css';

function Smack({ comments, posts }) {

  if (!posts){
    return null
  }
  if (posts){
    console.log(posts[0])
  }


  return (
    <div className='feed'>{posts.map((post) => (
      <div className='post'>
        {post.content}
        <div className='post-footer'>
          <div></div>
          <div></div>
          <button>reply</button>
        </div>
      </div>
    ))}

    </div>
  );
}

export default Smack;
