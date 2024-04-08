"use client";
import { UserCreateForm } from "../../../ui-components";
import "@aws-amplify/ui-react/styles.css";

export default function UserRegisterPage() {
  return (
    <section className="section">
      <h1 className="title">Register a Walker</h1>

      <UserCreateForm />
    </section>
  );
}
