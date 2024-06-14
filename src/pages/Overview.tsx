import { useState } from "react";

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
      <h1>Overview</h1>
      {/* Total # Orders [Triage Button]
      Most recent order:
      <Recent Order Info> */}
      <h3>
        Receive new order:
        <button type="button" onClick={recvOrderFn}>
          Submit
        </button>
      </h3>
      <h3>Recent Status: {triageStatus}</h3>
      <h2>[Ops]</h2>
      {/* > Avail Batts, Batts on Hold, Batts completed */}
      <h2>[Lab]</h2>
      {/* > # Current Lab Batts / Total Lab Batts */}
      <h2>[Storage]</h2>
      {/* > Total Usage / Total Capacity */}
      <h2>[Spec]</h2>
      {/* > Total # Specs */}
    </div>
  );
}
