import "../Talk_Smack/Talk_Smack.css";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { createComment, verifyUser } from "../../services/apiCalls";
import * as ReactDOM from "react-dom";
import { useAuthContext } from "../../hooks/useAuthContext.js";

function Reply({ postId, show, close, setToggleApiCall }) {
  const { user } = useAuthContext();
  const [comment, setComment] = useState({
    content: "",
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setComment({
      content: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.id === "sub"){
      await createComment(postId, comment, user.token);
      setToggleApiCall((prev) => !prev);
    }
    setComment({ content: "" })
    close()
  };
  //   e.preventDefault();
  //   
  //   await createComment(postId, comment, user.token);
  //   setToggleApiCall((prev) => !prev);
  //   close();
  // };

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
              value={comment.content}
              onChange={handleChange}
            />
            <div className="modal-footer">
              <button onClick={close} id="close">close</button>
              <div></div>
              <button className="submit" type="submit" id="sub">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
}

export default Reply;
