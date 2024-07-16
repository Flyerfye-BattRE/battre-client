import { useEffect, useState } from "react";
import config from "../../../config/config";
import PieChartVis from "../../ui/PieChartVis";

export interface BatteryStatusCounts {
  name: string;
  value: number;
}

export default function OpsSection() {
  const [isOpsSectionLoading, setIsOpsSectionLoading] = useState<boolean>(true);
  const [batteryStatusCounts, setBatteryStatusCounts] = useState<
    BatteryStatusCounts[]
  >([]);
  const [customerCount, setCustomerCount] = useState<number>(0);
  const colorMap = {
    "UNKNOWN": "#FF4081",   // Pink
    "INTAKE": "#00C49F",   // Green
    "REJECTED": "#C2185B",  // Crimson
    "TESTING": "#303F9F",    // Indigo
    "REFURB": "#0088FE",    // Blue
    "STORAGE": "#FF8042",   // Orange      
    "HOLD": "#FFBB28",      // Yellow      
    "SHIPPING": "#7B1FA2",  // Purple      
    "RECEIVED": "#00796B",  // Teal
    "DESTROYED": "#D32F2F", // Red
    "LOST": "#4A4A4A",      // Deep Orange      
  };  

  const legendData = [
    { value: 'UNKNOWN', color: colorMap['UNKNOWN'] },
    { value: 'INTAKE', color: colorMap['INTAKE'] },
    { value: 'REJECTED', color: colorMap['REJECTED'] },
    { value: 'REFURB', color: colorMap['REFURB'] },
    { value: 'STORAGE', color: colorMap['STORAGE'] },
    { value: 'HOLD', color: colorMap['HOLD'] },
    { value: 'SHIPPING', color: colorMap['SHIPPING'] },
    { value: 'RECEIVED', color: colorMap['RECEIVED'] },
    { value: 'DESTROYED', color: colorMap['DESTROYED'] },
    { value: 'LOST', color: colorMap['LOST'] },
  ];

  useEffect(() => {
    setIsOpsSectionLoading(true);
    fetch(config.apiBaseUrl + "/ops/getOverview", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ops section network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.batteryStatusCountList)) {
          setCustomerCount(data.customerCount);

          const batteryStatusCounts: BatteryStatusCounts[] =
            data.batteryStatusCountList.map((batteryStatusCount) => ({
              name: batteryStatusCount.batteryStatus,
              value: batteryStatusCount.count,
            }));

          setBatteryStatusCounts(batteryStatusCounts);
        } else {
          throw new Error("Ops section data format is incorrect");
        }

        setIsOpsSectionLoading(false);
      })
      .catch((error) => {
        console.error("Ops section fetch error:", error);
        setIsOpsSectionLoading(false);
      });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2>Battery Statuses</h2>
      {isOpsSectionLoading ? (
        <p>Loading...</p>
      ) : (
        <PieChartVis chartTitle="Battery Statuses" data={batteryStatusCounts} colorMap={colorMap} orderedLegend={legendData}/>
      )}
    </div>
  );
}
