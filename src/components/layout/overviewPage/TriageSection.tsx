import { useEffect, useState } from "react";
import config from "../../../config/config";

export default function TriageSection() {
  const [triageStatus, setTriageStatus] = useState("No Status");

  const recvOrderFn = () => {
    console.log("Receiving battery order");
    fetch(config.apiBaseUrl + "/triage", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
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
    <div style={{ width: "100%", height: "100%" }}>
      <button type="button" onClick={recvOrderFn}>
        Receive Order
      </button>
      <p>Recent Status: {triageStatus}</p>
    </div>
  );
}
