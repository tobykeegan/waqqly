"use client";

import { Button, Flex, Heading, Image, Text } from "@aws-amplify/ui-react";

export default function Home() {
  return (
    <div className="container">
      <section className="section">
        <h1 className="title">Welcome to the waqq.ly prototype!</h1>
        <br />
        <h2 className="subtitle">Wagg.ly is a service to connect 🐶 and 🚶‍♂️</h2>
        <article className="message">
          <div className="message-body">
            Built entirely with{" "}
            <a href="https://docs.amplify.aws/gen2/">AWS Amplify</a>,{" "}
            <a href="https://nextjs.org/">Next.js</a>, and the{" "}
            <a href="https://bulma.io">Bulma CSS framework</a>, this prototype
            demonstrates a full-stack application with a serverless backend.
            Under the covers, Amplify leverages <strong>AWS DynamoDB</strong>{" "}
            for storage, and exposes a GraphQL API for data access, through{" "}
            <strong>AWS AppSync</strong>. You can check out the repository on{" "}
          </div>
        </article>
        <div className="container">
          The current available features are
          <ul
            style={{
              listStyleType: "circle",
              padding: 16,
            }}
          >
            <li>Register a pet</li>
            <li>Register a walker</li>
            <li>Edit/Update a pet</li>
            <li>Edit/Update a walker</li>
            <li>View all pets</li>
            <li>View all walkers</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <h1 className="title">Get started 🎉</h1>
        <br />
        <h2 className="subtitle">
          Start by either registering your{" "}
          <a className="has-text-weight-medium" href="/register/pet">
            pet
          </a>
          , or yourself as a{" "}
          <a className="has-text-weight-medium" href="/register/walker">
            walker
          </a>
          .
        </h2>
      </section>
    </div>
  );
}
