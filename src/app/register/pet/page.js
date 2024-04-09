"use client";
import { PetCreateForm } from "../../../ui-components";
import "@aws-amplify/ui-react/styles.css";
import SuccessModal from "@/app/SuccessModal";
import FailureModal from "@/app/FailureModal";
import { useState } from "react";
export default function PetRegisterPage() {
  const [successModal, setSuccessModal] = useState(false);
  const [failureModal, setFailureModal] = useState(false);

  const toggleModal = (type) => {
    if (type === "success") {
      setSuccessModal(!successModal);
    } else {
      setFailureModal(!failureModal);
    }
  };
  return (
    <section className="section">
      <h1 className="title">Register a dog</h1>
      <div className="columns">
        <div className="column is-two-thirds">
          <PetCreateForm
            onSuccess={() => {
              toggleModal("success");
            }}
            onFailure={() => {
              toggleModal("failure");
            }}
          />
        </div>
        <article className="message is-info">
          <div className="message-body">
            Get started by registering a pet. As <strong>wagg.ly</strong> is in{" "}
            <span className="tag is-warning">Beta</span>, there is currently no
            concept of user authentication or pet ownership. You can think of
            this prototype as an <strong>Admin Experience</strong>, where you
            can manage all dogs, and all the walkers. <br />
          </div>
        </article>
      </div>
      <SuccessModal
        show={successModal}
        type="pet"
        onHide={() => {
          setSuccessModal(false);
        }}
      />
      <FailureModal
        show={failureModal}
        type="pet"
        onHide={() => {
          setFailureModal(false);
        }}
      />
    </section>
  );
}
