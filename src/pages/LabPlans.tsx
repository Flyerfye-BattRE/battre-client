import { useState, useEffect } from "react";
import LabPlanList from "../components/layout/labPage/LabPlanList";
import Card from "../components/ui/Card";

interface LabPlan {
  id: string;
  labPlanId: number;
  labPlanStatus: string;
  batteryId: number;
  optionalTesterRecordId: number;
  optionalRefurbPlanId: number;
}

export default function LabPlansPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [labPlans, setLabPlans] = useState<LabPlan[]>([]);

  // Runs the code in this section only when the values in the 2nd argument array change--currently will only run once
  // https://youtu.be/Dorf8i6lCuk?t=11464
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/lab/getLabPlans", {
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
        if (data && Array.isArray(data.labPlanList)) {
          const labPlans: LabPlan[] = data.labPlanList.map((plan, index) => ({
            id: String(index),
            ...plan,
          }));

          setLabPlans(labPlans);
        } else {
          throw new Error("Data format is incorrect");
        }

        setIsLoading(false);
        // setLabPlans(data);
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
        <LabPlanList labPlans={labPlans} />
      </Card>
    </section>
  );
}
