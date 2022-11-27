import './Talk_Smack.css'
import { CSSTransition } from "react-transition-group";


function Talk_Smack({ show, close }) {

  return (
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>

    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Talk Smack!</h4>
        </div>
        <div className="modal-body">This is the Smack Talk</div>
        <div className="modal-footer">
          <button onClick={close}>close</button>
        </div>
      </div>
    </div>
    </CSSTransition>
  );
}

export default Talk_Smack;