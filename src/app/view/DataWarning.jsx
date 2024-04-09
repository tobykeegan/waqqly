"use client";
import { useState } from "react";
export default function Warning(props) {
  const [show, setShow] = useState(true);

  return (
    <article
      className="message is-info"
      style={{
        display: show ? "block" : "none",
      }}
    >
      <div className="message-header">
        <p>Data not what you were expecting?</p>
        <button
          className="delete"
          aria-label="delete"
          onClick={() => {
            setShow(false);
          }}
        ></button>
      </div>
      <div className="message-body">
        Amplify&apos;s backend can be a bit slow to update. If you&apos;re not
        seeing the changes you were expecting, try refreshing the page.
      </div>
    </article>
  );
}
