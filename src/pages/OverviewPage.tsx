import { useState } from "react";
import Card from "../components/ui/Card";
import classes from "./OverviewPage.module.css";

export default function OverviewPage() {
  const [triageStatus, setTriageStatus] = useState("No Status");

  const recvOrderFn = () => {
    console.log("Receiving battery order");
    fetch("http://localhost:8080/triage", {
      method: "GET",
      // body: JSON.stringify("Here's the body"),
      headers: {
        // 'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        if (data && data.status) {
          console.log("Status is: " + data.status);
          setTriageStatus(data.status);
        } else {
          throw new Error("Data format is incorrect");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    console.log("Finished receiving battery order");
  };

  return (
    <div>
      {/* Total # Orders [Triage Button]
      Most recent order:
      <Recent Order Info> */}
      <Card>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>New Orders</h2>
          <section className={classes.sectionContents}>
            <button type="button" onClick={recvOrderFn}>
              Receive Order
            </button>
          </section>
          <section className={classes.sectionContents}>
            Recent Status: {triageStatus}
          </section>
        </section>
      </Card>
      <Card>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Ops</h2>
          <section className={classes.sectionContents}>
            {"x"}
            {/* > Avail Batts, Batts on Hold, Batts completed */}
          </section>
        </section>
      </Card>
      <Card>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Lab</h2>
          <section className={classes.sectionContents}>
            {"x"}
            {/* > # Current Lab Batts / Total Lab Batts */}
          </section>
        </section>
      </Card>
      <Card>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Storage</h2>
          <section className={classes.sectionContents}>
            {"x"}
            {/* > Total Usage / Total Capacity */}
          </section>
        </section>
      </Card>
      <Card>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Spec</h2>
          <section className={classes.sectionContents}>
            {"x"}
            {/* > Total # Specs */}
          </section>
        </section>
      </Card>
    </div>
  );
}
