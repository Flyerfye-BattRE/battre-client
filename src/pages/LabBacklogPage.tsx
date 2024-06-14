import { useEffect, useState } from "react";
import LabSubNavigation from "../components/layout/labPage/LabSubNavigation";
import RefurbBacklogList from "../components/layout/labPage/RefurbBacklogList";
import TesterBacklogList from "../components/layout/labPage/TesterBacklogList";

interface TesterBacklog {
  id: string;
  testerBacklogId: number;
  batteryId: number;
  testerBacklogPriority: number;
  testerBacklogStartDate: string;
  testerBacklogEndDate: string;
}

interface RefurbBacklog {
  id: string;
  refurbPlanId: number;
  batteryId: number;
  refurbPlanPriority: number;
  refurbPlanStartDate: string;
  refurbPlanEndDate: string;
  available: boolean;
  resolder: boolean;
  optionalResolderRecordId: number;
  repack: boolean;
  optionalRepackRecordId: number;
  processorSwap: boolean;
  optionalProcessorSwapRecordId: number;
  capacitorSwap: boolean;
  optionalCapacitorSwapRecordId: number;
}

export default function LabBacklogPage() {
  const [isTesterLoading, setIsTesterLoading] = useState<boolean>(true);
  const [isRefurbLoading, setIsRefurbLoading] = useState<boolean>(true);
  const [testerBacklog, setTesterBacklog] = useState<TesterBacklog[]>([]);
  const [refurbBacklog, setRefurbBacklog] = useState<RefurbBacklog[]>([]);

  useEffect(() => {
    setIsTesterLoading(true);
    fetch("http://localhost:8080/lab/getTesterBacklog", {
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
        if (data && Array.isArray(data.testerBacklogList)) {
          const testerBacklog: TesterBacklog[] = data.testerBacklogList.map(
            (testerEntry, index) => ({
              id: String(index),
              ...testerEntry,
            })
          );

          setTesterBacklog(testerBacklog);
        } else {
          throw new Error("Data format is incorrect");
        }

        setIsTesterLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setIsTesterLoading(false);
      });

    setIsRefurbLoading(true);
    fetch("http://localhost:8080/lab/getRefurbPlans", {
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
        if (data && Array.isArray(data.refurbPlanList)) {
          const refurbBacklog: RefurbBacklog[] = data.refurbPlanList.map(
            (refurbEntry, index) => ({
              id: String(index),
              ...refurbEntry,
            })
          );

          setRefurbBacklog(refurbBacklog);
        } else {
          throw new Error("Data format is incorrect");
        }

        setIsRefurbLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setIsRefurbLoading(false);
      });
  }, []);

  if (isTesterLoading || isRefurbLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <LabSubNavigation />
      <h1>Lab Backlog Page</h1>
      <TesterBacklogList testerBacklog={testerBacklog} />
      <RefurbBacklogList refurbBacklog={refurbBacklog} />
    </section>
  );
}
