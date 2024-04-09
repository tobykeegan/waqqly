export default function DeleteModal(props) {
  const showHideClassName = props.show ? "modal is-active" : "modal";

  return (
    <div className={showHideClassName}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Confirm action</p>
          <button
            className="delete"
            onClick={props.onHide}
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">
          <p>Are you sure you want to remove this entity?</p>
        </section>
        <footer className="modal-card-foot">
          <div className="buttons">
            <button className="button is-danger" onClick={props.onConfirm}>
              I&apos;m sure, delete.
            </button>
            <button className="button" onClick={props.onHide}>
              Cancel
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
