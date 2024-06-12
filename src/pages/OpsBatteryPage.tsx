import { useState, useEffect } from "react";
import BatteryInvList from "../components/layout/opsPage/BatteryInvList";
import OpsSubNavigation from "../components/layout/opsPage/OpsSubNavigation";

interface BatteryInv {
  id: string;
  batteryId: number;
  batteryStatus: string;
  batteryTypeId: number;
  intakeOrderId: number;
  optional_holdId: number;
  optional_outputOrderId: number;
}

export default function OpsBatteryPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [batteryInv, setBatteryInv] = useState<BatteryInv[]>([]);

  // Runs the code in this section only when the values in the 2nd argument array change--currently will only run once
  // https://youtu.be/Dorf8i6lCuk?t=11464
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/ops/getBatteryInventory", {
      method: "GET",
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
        if (data && Array.isArray(data.batteryList)) {
          const batteryInv: BatteryInv[] = data.batteryList.map(
            (battery, index) => ({
              id: String(index),
              ...battery,
            })
          );

          setBatteryInv(batteryInv);
        } else {
          throw new Error("Data format is incorrect");
        }

        setIsLoading(false);
        // setOpsPlans(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <OpsSubNavigation />
      <h1>Ops Battery Page</h1>
      <BatteryInvList batteryInv={batteryInv} />
    </section>
  );
}
