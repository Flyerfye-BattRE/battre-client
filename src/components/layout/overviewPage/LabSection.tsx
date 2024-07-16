import { useEffect, useState } from "react";
import config from "../../../config/config";
import PieChartVis from "../../ui/PieChartVis";

export interface LabStatusCounts {
  name: string;
  value: number;
}

export default function LabSection() {
  const [isLabSectionLoading, setIsLabSectionLoading] = useState<boolean>(true);
  const [labStatusCounts, setLabStatusCounts] = useState<LabStatusCounts[]>([]);
  const colorMap = {
    "UNKNOWN": "#FF4081", // Pink
    "TESTER-NEW": "#303F9F", // Indigo
    "TESTER-RETRY": "#FF8042",  // Orange  
    "TESTER-FAILED": "#0088FE",  // Blue
    "REFURB-NEW": "#00796B", // Teal
    "REFURB-CONT": "#7B1FA2", // Purple 
    "REFURB-RETRY": "#FFBB28", // Yellow      
    "REFURB-FAILED": "#C2185B",  // Crimson
    "PASS": "#00C49F",// Green
    "DESTROYED": "#D32F2F", // Red
    "LOST": "#4A4A4A", // Deep Orange 
  };

  const legendData = [
    { value: 'UNKNOWN', color: colorMap['UNKNOWN'] },
    { value: 'TESTER-NEW', color: colorMap['TESTER-NEW'] },
    { value: 'TESTER-RETRY', color: colorMap['TESTER-RETRY'] },
    { value: 'TESTER-FAILED', color: colorMap['TESTER-FAILED'] },
    { value: 'REFURB-NEW', color: colorMap['REFURB-NEW'] },
    { value: 'REFURB-CONT', color: colorMap['REFURB-CONT'] },
    { value: 'REFURB-RETRY', color: colorMap['REFURB-RETRY'] },
    { value: 'REFURB-FAILED', color: colorMap['REFURB-FAILED'] },
    { value: 'PASS', color: colorMap['PASS'] },
    { value: 'DESTROYED', color: colorMap['DESTROYED'] },
    { value: 'LOST', color: colorMap['LOST'] },
  ];

  useEffect(() => {
    setIsLabSectionLoading(true);
    fetch(config.apiBaseUrl + "/lab/getLabPlanStatusCounts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Lab section network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.labPlanStatusCountList)) {
          const labStatusCounts: LabStatusCounts[] =
            data.labPlanStatusCountList.map((labStatusCount) => {
              let name = labStatusCount.labPlanStatus;

              // Adjust the names for pie chart viz
              name = name
                .replace("REFURB_", "REFURB-")
                .replace("TESTER_", "TESTER-")
                .replace("BACKLOG_", "");

              return {
                name,
                value: labStatusCount.count,
              };
            });

          setLabStatusCounts(labStatusCounts);
        } else {
          throw new Error("Lab section data format is incorrect");
        }

        setIsLabSectionLoading(false);
      })
      .catch((error) => {
        console.error("Lab section fetch error:", error);
        setIsLabSectionLoading(false);
      });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2>Plan Statuses</h2>
      {isLabSectionLoading ? (
        <p>Loading...</p>
      ) : (
        <PieChartVis chartTitle="Lab Statuses" data={labStatusCounts} colorMap={colorMap} orderedLegend={legendData}/>
      )}
    </div>
  );
}
