import { useState, useEffect } from "react";
import StorageStatsList from "../components/layout/storagePage/StorageStatsList";
import Card from "../components/ui/Card";
import config from "../config/config";

export interface StorageStats {
  id: string;
  batteryTierId: number;
  usedStorage: number;
  availStorage: number;
  capacity: number;
}

export default function StoragePage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [storageStats, setStorageStats] = useState<StorageStats[]>([]);

  // Runs the code in this section only when the values in the 2nd argument array change--currently will only run once
  // https://youtu.be/Dorf8i6lCuk?t=11464
  useEffect(() => {
    setIsLoading(true);
    fetch(config.apiBaseUrl + "/storage/getStorageStats", {
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
        if (data && Array.isArray(data.tierStatsList)) {
          const tierStats: StorageStats[] = data.tierStatsList.map(
            // (stat, index) => ({
            //   id: String(index),
            //   ...stat,
            // })
            (storageStat, index) => ({
              id: String(index),
              batteryTierId: storageStat.batteryTierId,
              usedStorage: storageStat.usedStorage,
              availStorage: storageStat.capacity-storageStat.usedStorage,
              capacity: storageStat.capacity,
            })
          );

          setStorageStats(tierStats);
        } else {
          throw new Error("Data format is incorrect");
        }

        setIsLoading(false);
        // setStoragePlans(data);
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
      <Card>
        <StorageStatsList storageStats={storageStats} />
      </Card>
  );
}
