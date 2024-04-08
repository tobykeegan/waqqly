"use client";
import { PetCreateForm } from "../../../ui-components";
import "@aws-amplify/ui-react/styles.css";

export default function PetRegisterPage() {
  return (
    <section className="section">
      <h1 className="title">Register a Pet</h1>

      <PetCreateForm />
    </section>
  );
}
