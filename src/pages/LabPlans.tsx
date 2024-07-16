import { useState, useEffect } from "react";
import config from "../config/config";
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

  useEffect(() => {
    setIsLoading(true);
    fetch(config.apiBaseUrl + "/lab/getLabPlans", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
