"use client";
import "@aws-amplify/ui-react/styles.css";
export default function FailureModal(props) {
  const showHideClassName = props.show ? "modal is-active" : "modal";
  return (
    <div className={showHideClassName}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="notification is-danger">
          <button
            className="delete"
            aria-label="close"
            onClick={props.onHide}
          ></button>
          <h1 className="title">Error</h1>
          <p>
            An error occured trying to define this {props.type}. Please try
            again later.
          </p>
        </div>
      </div>
    </div>
  );
}
