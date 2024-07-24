import React from "react";
import classes from "./AboutModal.module.css";

interface AboutModalProps {
  closeFn: () => void;
}

export default function AboutModal(props: AboutModalProps) {
  return (
    <div className={classes.aboutModal} data-testid="about-modal">
      <h1 className={classes.h1}>
        Batt<b>RE</b> &amp; Me
      </h1>
      <p className={classes.p}>
        Hello! I&apos;m{" "}
        <a href="https://www.linkedin.com/in/issabeekun/">Issa Beekun</a>, a
        software engineer based in Seattle. I have a background working at
        Tableau, a leader in business intelligence, and at Promise Pay, a
        startup focused on improving interactions between governments and the
        public.
        <br />
        <br />
        <a href="https://github.com/Flyerfye-BattRE">BattRE</a> is a full-stack
        application that simulates the operations of a battery recycling and
        refurbishment factory.
        <br />
        <br />
        It features a React-based frontend for interactive data visualization
        and battery/customer data management.
        <br />
        <br />
        The backend is composed of Dockerized microservices developed in Java
        with Spring Boot, leveraging REST/gRPC for communication and AWS
        services for deployment and scalability.
      </p>

      <button
        className={classes.button}
        data-testid="about-close-button"
        onClick={props.closeFn}
      >
        Close
      </button>
    </div>
  );
}
