import "./Talk_Smack.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { createPost, verifyUser } from "../../services/apiCalls";
import * as ReactDOM  from "react-dom";
import { useAuthContext } from "../../hooks/useAuthContext.js"

function Talk_Smack({ show, close, setToggleApiCall }) {
  const { user } = useAuthContext()
  const [post, setPost] = useState({
    content: ""
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setPost({
      content: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(post,user)
    await createPost(post,user.token);
    setToggleApiCall((prev) => !prev);
    close()
  };

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className={`modal ${show ? "show" : ""}`}>
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title">Talk Smack</h4>
            </div>
            <textarea
              className="modal-body"
              placeholder="Smack talking starts here..."
              name="content"
              maxlength="155"
              value={post.content}
              onChange={handleChange}
            />
            <div className="modal-footer">
              <button onClick={close}>close</button>
              <div></div>
              <button className="submit" type="submit">submit</button>
            </div>
          </div>
        </form>
      </div>
    </CSSTransition>,
    document.getElementById('root')
  );
}

export default Talk_Smack;
