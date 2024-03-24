"use client";

import { Button, Flex, Heading, Image, Text } from "@aws-amplify/ui-react";

export default function Home() {
  return (
    <div className="columns is-desktop">
      <div className="column">
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
      <div className="column">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <p className="title">Simple signup</p>
                  <p className="subtitle">in one simple step</p>
                </article>
                <article className="tile is-child notification is-warning">
                  <p className="title">Safe</p>
                  <p className="subtitle">All walkers are vetted at sign up!</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                  <p className="title">Walk other dogs</p>
                  <figure className="image is-4by3">
                    <img
                      src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="dog"
                    />
                  </figure>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-danger">
                <p className="title">Free, forever!</p>
                <p className="subtitle">
                  We believe all pets deserve to be walked by passionate people.
                </p>
                <div className="content"></div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
