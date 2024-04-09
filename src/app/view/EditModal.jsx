"use client";
// import "@aws-amplify/ui-react/styles.css";
export default function EditModal(props) {
  const showHideClassName = props.show ? "modal is-active" : "modal";
  return (
    <div className={showHideClassName}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Update {props.type}</p>
        </header>
        <section className="modal-card-body">{props.formToRender}</section>
      </div>
    </div>
  );
}
