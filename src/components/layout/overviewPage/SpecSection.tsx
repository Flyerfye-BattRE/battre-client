import { useEffect, useState } from "react";
import config from "../../../config/config";
import { BatterySpecs } from "../../../pages/SpecsPage";
import TreemapChartVis from "../../ui/TreemapChartVis";

export interface GroupedBatterySpecs {
  name: string;
  children: BatterySpecs[];
}

export default function SpecSection() {
  const [isSpecSectionLoading, setIsSpecSectionLoading] =
    useState<boolean>(true);
  const [batterySpecs, setBatterySpecs] = useState<GroupedBatterySpecs[]>([]);

  useEffect(() => {

    setIsSpecSectionLoading(true);
    fetch(config.apiBaseUrl + "/spec/getAllBatterySpecs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Spec section network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.batterySpecsList)) {
          const groupedData = data.batterySpecsList.reduce((acc, batterySpec) => {
            // Group by tierLabel
            const name = "Tier " + batterySpec.tierLabel;
            if (!acc[name]) {
              acc[name] = [];
            }
            acc[name].push({
              id: String(acc[name].length),
              name: batterySpec.batteryName,
              size: 1,
              ...batterySpec,
            });
            return acc;
          }, {});
    
          // Transform the grouped data into the desired format
          const transformedData = Object.keys(groupedData).map((name) => ({
            name,
            size: groupedData[name].length,
            children: groupedData[name],
          }));
    
          setBatterySpecs(transformedData);
        } else {
          throw new Error("Data format is incorrect");
        }

        setIsSpecSectionLoading(false);
      })
      .catch((error) => {
        console.error("Spec section fetch error:", error);
        setIsSpecSectionLoading(false);
      });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {isSpecSectionLoading ? (
        <p>Loading...</p>
      ) : (
        <TreemapChartVis chartTitle="Tier Counts" data={batterySpecs} />
      )}
    </div>
  );
}
