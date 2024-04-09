"use client";
import "@aws-amplify/ui-react/styles.css";
export default function SuccessModal(props) {
  const showHideClassName = props.show ? "modal is-active" : "modal";
  return (
    <div className={showHideClassName}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="notification is-success">
          <button
            className="delete"
            aria-label="close"
            onClick={props.onHide}
          ></button>
          <h1 className="title">Success!</h1>
          <p>Your {props.type} has been registered.</p>
        </div>
      </div>
    </div>
  );
}
