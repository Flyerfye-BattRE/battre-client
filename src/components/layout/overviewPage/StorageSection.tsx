import { useEffect, useState } from "react";
import config from "../../../config/config";
import { StorageStats } from "../../../pages/StoragePage";
import BarChartVis from "../../ui/BarChartVis";

export default function StorageSection() {
  const [isStorageSectionLoading, setIsStorageSectionLoading] =
    useState<boolean>(true);
  const [storageStats, setStorageStats] = useState<StorageStats[]>([]);

  useEffect(() => {
    setIsStorageSectionLoading(true);
    fetch(config.apiBaseUrl + "/storage/getStorageStats", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Storage section network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.tierStatsList)) {
          const tierStats: StorageStats[] = data.tierStatsList.map(
            (storageStat, index) => ({
              id: String(index),
              batteryTierId: storageStat.batteryTierId,
              usedStorage: storageStat.usedStorage,
              availStorage: storageStat.capacity - storageStat.usedStorage,
              capacity: storageStat.capacity,
            }),
          );

          setStorageStats(tierStats);
        } else {
          throw new Error("Storage section data format is incorrect");
        }

        setIsStorageSectionLoading(false);
      })
      .catch((error) => {
        console.error("Storage section fetch error:", error);
        setIsStorageSectionLoading(false);
      });
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {isStorageSectionLoading ? (
        <p>Loading...</p>
      ) : (
        <BarChartVis
          chartTitle="Battery Statuses"
          xAxisTitleKey="Storage Tier"
          xAxisLabelKey="batteryTierId"
          bottomBarKey="usedStorage"
          topBarKey="availStorage"
          data={storageStats}
        />
      )}
    </div>
  );
}
