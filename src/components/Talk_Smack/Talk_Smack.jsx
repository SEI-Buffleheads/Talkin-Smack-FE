import "./Talk_Smack.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { createPost } from "../../services/apiCalls";
import * as ReactDOM  from "react-dom";

function Talk_Smack({ show, close, setToggleApiCall }) {
  const [post, setPost] = useState({
    title: "User said: ",
    content: "",
    author: 5, //i think this should be taken from useParams later when we have authorization
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(post);
    setToggleApiCall((prev) => !prev);
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
              placeholder="Talk Smack"
              name="content"
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
