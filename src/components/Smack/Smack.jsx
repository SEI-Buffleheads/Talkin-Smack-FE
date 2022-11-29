import './Smack.css';

function Smack({ comments, posts }) {
  
  console.log(comments)


  return (
    <div className='feed'>{comments.map((comment) => (
      <div className='post'>
        {comment}
        <div className='footer'>
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
