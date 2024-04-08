"use client";

import Delete from "./DeleteObject";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import React, { Component } from "react";

export default function ObjectActions({ type, id }) {
  const [modalShow, setModalShow] = useState(false);

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const handleDelete = (action, type, id) => {
    console.log(`Want to ${action} ${type} with id ${id}`);
    if (action === "delete") {
      Delete(type, id);
    }
    toggleModal();
    window.location.reload();
  };

  return (
    <div>
      <DeleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onConfirm={() => handleDelete("delete", type, id)}
      />
      <div className="field is-grouped">
        <p className="control">
          <button
            disabled
            className="button"
            onClick={() => handleDelete("edit", type, id)}
          >
            Edit
          </button>
        </p>
        <p className="control">
          <button
            className="button is-danger"
            onClick={() => setModalShow(true)}
          >
            Delete
          </button>
        </p>
      </div>
    </div>
  );
}
