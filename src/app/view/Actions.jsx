"use client";

import Delete from "./DeleteObject";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import { useState } from "react";
import React, { Component } from "react";
import { useRouter } from "next/navigation";
import PetUpdateForm from "@/ui-components/PetUpdateForm";
import UserUpdateForm from "@/ui-components/UserUpdateForm";
import "@aws-amplify/ui-react/styles.css";

export default function ObjectActions({ type, id }) {
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);

  const toggleModal = (type) => {
    if (type == "delete") {
      setDeleteModalShow(!deleteModalShow);
    } else {
      setEditModalShow(!editModalShow);
    }
    // if the modal was closed, refresh the data on the page
    if (!deleteModalShow || !editModalShow) {
      window.location.reload();
    }
  };

  const handleDelete = (action, type, id) => {
    console.log(`Want to ${action} ${type} with id ${id}`);
    if (action === "delete") {
      Delete(type, id);
    }
    toggleModal(deleteModalShow, setDeleteModalShow);
  };

  const formProps = {
    type: type,
    id: id,
    onCancel: () => {
      toggleModal(type);
    },
    onSuccess: () => {
      toggleModal(type);
    },
  };

  return (
    <div>
      <DeleteModal
        show={deleteModalShow}
        onHide={() => toggleModal("delete")}
        onConfirm={() => handleDelete("delete", type, id)}
      />
      <EditModal
        type={type}
        show={editModalShow}
        onHide={() => toggleModal(type)}
        formToRender={
          type == "pet" ? (
            <PetUpdateForm {...formProps} />
          ) : (
            <UserUpdateForm {...formProps} />
          )
        }
      />
      <div className="field is-grouped">
        <p className="control">
          <button className="button" onClick={() => setEditModalShow(true)}>
            Edit
          </button>
        </p>
        <p className="control">
          <button
            className="button is-danger"
            onClick={() => setDeleteModalShow(true)}
          >
            Delete
          </button>
        </p>
      </div>
    </div>
  );
}
