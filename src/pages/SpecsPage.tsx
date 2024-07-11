import { useState, useEffect } from "react";
import BatterySpecsList from "../components/layout/specsPage/BatterySpecsList";
import Card from "../components/ui/Card";
import config from "../config/config";

export interface BatterySpecs {
  id: string;
  size: number;
  group: string;
  // batteryTypeId: number;
  batteryTypeId: string;
  mfc: string;
  // terminalLayoutId: number;
  // tierId: number;
  terminalLayoutId: string;
  tierId: string;
  composition: string;
  optionalSafetyInfo: string;
  // optionalMinVoltage: number;
  // optionalMaxVoltage: number;
  // optionalMinCurrent: number;
  // optionalMaxCurrent: number;
  optionalMinVoltage: string;
  optionalMaxVoltage: string;
  optionalMinCurrent: string;
  optionalMaxCurrent: string;
}

export default function SpecsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [batterySpecs, setBatterySpecs] = useState<BatterySpecs[]>([]);

  // Runs the code in this section only when the values in the 2nd argument array change--currently will only run once
  // https://youtu.be/Dorf8i6lCuk?t=11464
  useEffect(() => {
    setIsLoading(true);
    fetch(config.apiBaseUrl + "/spec/getAllBatterySpecs", {
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
        if (data && Array.isArray(data.batterySpecsList)) {
          const batterySpecs: BatterySpecs[] = data.batterySpecsList.map(
            (batterySpec, index) => ({
              id: String(index),
              size: 1,
              group: batterySpec.tierId,
              ...batterySpec,
            })
          );

          setBatterySpecs(batterySpecs);
        } else {
          throw new Error("Data format is incorrect");
        }

        setIsLoading(false);
        // setSpecPlans(data);
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
      <Card>
        <BatterySpecsList batterySpecs={batterySpecs} />
      </Card>
    </section>
  );
}
