import Delete from "./DeleteObject";

function handleClick(action, type, id) {
  console.log(`Want to ${action} ${type} with id ${id}`);

  if (action === "delete") {
    Delete(type, id);
  }
}

export default function ObjectActions({ type, id }) {
  "use client";
  return (
    <div className="field is-grouped">
      <p className="control">
        <button
          disabled
          className="button"
          onClick={() => handleClick("edit", type, id)}
        >
          Edit
        </button>
      </p>
      <p className="control">
        <button
          className="button is-danger"
          onClick={() => handleClick("delete", type, id)}
        >
          Delete
        </button>
      </p>
    </div>
  );
}
