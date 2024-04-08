"use client";

import { Button, Flex, Heading, Image, Text } from "@aws-amplify/ui-react";

export default function Home() {
  return (
    <div className="level">
      <div className="level-left">
        <section className="section">
          <h1 className="title">Welcome to the waqq.ly prototype!</h1>
          <br />
          <h2 className="subtitle">
            Waqq.ly is a service to connect 🐶 and 🚶‍♂️
          </h2>
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
    </div>
  );
}
