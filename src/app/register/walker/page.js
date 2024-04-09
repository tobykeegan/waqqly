"use client";
import { UserCreateForm } from "../../../ui-components";
import "@aws-amplify/ui-react/styles.css";
import SuccessModal from "@/app/SuccessModal";
import FailureModal from "@/app/FailureModal";
import { useState } from "react";
export default function UserRegisterPage() {
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
      <h1 className="title">Register a walker</h1>
      <div className="columns">
        <div className="column is-two-thirds">
          <UserCreateForm
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
            Get started by registering a walker. As <strong>wagg.ly</strong> is
            in <span className="tag is-warning">Beta</span>, there is currently
            no concept of user authentication or ownership. You can think of
            this prototype as an <strong>Admin Experience</strong>, where you
            can manage all dogs, and all the walkers. <br />
          </div>
        </article>
      </div>
      <SuccessModal
        show={successModal}
        type="walker"
        onHide={() => {
          setSuccessModal(false);
        }}
      />
      <FailureModal
        show={failureModal}
        type="walker"
        onHide={() => {
          setFailureModal(false);
        }}
      />
    </section>
  );
}
