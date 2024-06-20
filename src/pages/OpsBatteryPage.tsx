import { useState, useEffect } from "react";
import BatteryInvList from "../components/layout/opsPage/BatteryInvList";
import Card from "../components/ui/Card";

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
  const [update, setUpdate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [batteryInv, setBatteryInv] = useState<BatteryInv[]>([]);

  const triggerUpdate = () => {
    setUpdate(!update);
  };

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
  }, [update]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <Card>
        <BatteryInvList batteryInv={batteryInv} updateFn={triggerUpdate} />
      </Card>
    </section>
  );
}
