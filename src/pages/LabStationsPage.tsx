import { useEffect, useState } from "react";
import RefurbStnList from "../components/layout/labPage/RefurbStnList";
import TesterStnList from "../components/layout/labPage/TesterStnList";
import Card from "../components/ui/Card";
import config from "../config/config";

interface TesterStation {
  id: string;
  testerStnId: number;
  terminalLayoutId: number;
  inUse: boolean;
  optionalActiveBatteryId: number;
  lastActiveDate: string;
  lastCalibrationDate: string;
  nextCalibrationDate: string;
}

interface RefurbStation {
  id: string;
  refurbStnId: number;
  refurbStationClass: string;
  inUse: boolean;
  optionalActiveBatteryId: number;
  lastActiveDate: string;
  lastCalibrationDate: string;
  nextCalibrationDate: string;
}

export default function LabStationsPage() {
  const [isTesterStnsLoading, setIsTesterStnsLoading] = useState<boolean>(true);
  const [isRefurbStnsLoading, setIsRefurbStnsLoading] = useState<boolean>(true);
  const [testerStns, setTesterStns] = useState<TesterStation[]>([]);
  const [refurbStns, setRefurbStns] = useState<RefurbStation[]>([]);

  useEffect(() => {
    setIsTesterStnsLoading(true);
    fetch(config.apiBaseUrl + "/lab/getTesterStnInfo", {
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
        if (data && Array.isArray(data.testerStationList)) {
          const testerStns: TesterStation[] = data.testerStationList.map(
            (testerStn, index) => ({
              id: String(index),
              ...testerStn,
            })
          );

          setTesterStns(testerStns);
        } else {
          throw new Error("Data format is incorrect");
        }

        setIsTesterStnsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setIsTesterStnsLoading(false);
      });

    setIsRefurbStnsLoading(true);
    fetch(config.apiBaseUrl + "/lab/getRefurbStnInfo", {
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
        if (data && Array.isArray(data.refurbStationList)) {
          const refurbStns: RefurbStation[] = data.refurbStationList.map(
            (refurbStn, index) => ({
              id: String(index),
              ...refurbStn,
            })
          );

          setRefurbStns(refurbStns);
        } else {
          throw new Error("Data format is incorrect");
        }

        setIsRefurbStnsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setIsRefurbStnsLoading(false);
      });
  }, []);

  if (isTesterStnsLoading || isRefurbStnsLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <Card>
      <TesterStnList testerStns={testerStns} />
      </Card>
      <Card>
      <RefurbStnList refurbStns={refurbStns} />
      </Card>
    </section>
  );
}
