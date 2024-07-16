import { useState, useEffect } from "react";
import BatteryInvList from "../components/layout/opsPage/BatteryInvList";
import Card from "../components/ui/Card";
import config from "../config/config";

export interface BatteryInv {
  id: string;
  batteryId: string;
  batteryStatus: string;
  batteryTypeId: number;
  intakeOrderId: number;
  optionalHoldId: string;
  optionalOutputOrderId: string;
  updateFn: () => void;
}

export default function OpsBatteryPage() {
  const [update, setUpdate] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [batteryInv, setBatteryInv] = useState<BatteryInv[]>([]);

  const triggerUpdate = () => {
    setUpdate(!update);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(config.apiBaseUrl + "/ops/getBatteryInventory", {
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
