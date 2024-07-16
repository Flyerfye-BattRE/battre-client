import React from "react";
import classes from "./AboutMeModal.module.css";

interface AboutMeModalProps {
  closeFn: () => void;
}

export default function AboutMeModal(props: AboutMeModalProps) {
  return (
    <div className={classes.aboutMeModal} data-testid="about-me-modal">
      <h1 className={classes.h1}>Hello!</h1>
      <p className={classes.p}>
        I&apos;m{" "}
        <a href="https://www.linkedin.com/in/issabeekun/">Issa Beekun</a>, a
        software engineer based in Seattle. This site is a portfolio project
        that simulates high level operations of a battery recycling company. My
        full-stack implementation consists of a front-end client that is written
        in TypeScript while the back-end is written in Java and PostGreSQL.
        <br />
        The FE uses NodeJS and React to dynamically interact with the BE server.
        <br />
        The BE consists of Dockerized Spring micro-service architecture that
        communicates between services using gRPC with a publicly facing REST
        gateway available to handle requests from the client. <br />
        <br />
        <br />
        In the past, I&apos;ve spent years working at business intelligence
        giant Tableau and a startup that seeks to humanize the interaction
        between governments and the people they serve, Promise Pay.
        <br />
        <br />
        After spending time traveling internationally, I am excited to return to
        the tech industry and make meaningful contributions as I continue to
        grow my skills and expand my interests.
      </p>

      <button
        className={classes.button}
        data-testid="about-me-close-button"
        onClick={props.closeFn}
      >
        Close
      </button>
    </div>
  );
}
