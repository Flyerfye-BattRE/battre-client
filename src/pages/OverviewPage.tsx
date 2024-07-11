import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import classes from "./OverviewPage.module.css";
import config from "../config/config";
import { Link } from "react-router-dom";
import { StorageStats } from "./StoragePage";
import PieChartVis from "../components/ui/PieChartVis";
import RadarChartVis from "../components/ui/RadarChartVis";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import BarChartVis from "../components/ui/BarChartVis";
import TreemapChartVis from "../components/ui/TreemapChartVis";
import { BatterySpecs } from "./SpecsPage";

export interface LabStatusCounts {
  name: string;
  value: number;
}

export interface BatteryStatusCounts {
  // id: string;
  // batteryStatus: string;
  // count: number;
  name: string;
  value: number;
}

export interface TierCounts {
  // id: string;
  // tier: string;
  // count: number;
  name: string;
  value: number;
}

export interface MinMaxSpecs {
  minVoltage: number;
  maxVoltage: number;
  minCurrent: number;
  maxCurrent: number;
}

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function OverviewPage() {
  const [triageStatus, setTriageStatus] = useState("No Status");
  const [isOpsSectionLoading, setIsOpsSectionLoading] = useState<boolean>(true);
  const [isLabSectionLoading, setIsLabSectionLoading] = useState<boolean>(true);
  const [isStorageSectionLoading, setIsStorageSectionLoading] =
    useState<boolean>(true);
  const [isSpecSectionLoading, setIsSpecSectionLoading] =
    useState<boolean>(true);
  const [labStatusCounts, setLabStatusCounts] = useState<LabStatusCounts[]>([]);
  const [batteryStatusCounts, setBatteryStatusCounts] = useState<
    BatteryStatusCounts[]
  >([]);
  const [customerCount, setCustomerCount] = useState<number>(0);
  const [storageStats, setStorageStats] = useState<StorageStats[]>([]);
  const [specsCount, setSpecsCount] = useState<number>(0);
  const [tierCounts, setTierCounts] = useState<TierCounts[]>([]);
  const [batterySpecs, setBatterySpecs] = useState<BatterySpecs[]>([]);
  const [minMaxSpecs, setMinMaxSpecs] = useState<MinMaxSpecs>();

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
            // (storageStat, index) => ({
            //   id: String(index),
            //   ...storageStat,
            // })
            (storageStat, index) => ({
              id: String(index),
              batteryTierId: storageStat.batteryTierId,
              usedStorage: storageStat.usedStorage,
              availStorage: storageStat.capacity-storageStat.usedStorage,
              capacity: storageStat.capacity,
            })
            // (storageStat) => ({
            //   id: storageStat.batteryTierId,
            //   subsetValue: storageStat.availStorage,
            //   supersetValue: storageStat.capacity,
            // })
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

    setIsSpecSectionLoading(true);
    fetch(config.apiBaseUrl + "/spec/getOverview", {
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
        if (data && Array.isArray(data.tierCountList)) {
          const tierCounts: TierCounts[] = data.tierCountList.map(
            (tierStat) => ({
              name: tierStat.tier,
              value: tierStat.count,
            })
            // (tierCount, index) => ({
            //   id: String(index),
            //   ...tierCount,
            // })
          );
          setTierCounts(tierCounts);

          const minMaxSpecs: MinMaxSpecs = {
            minVoltage: data.minVoltage,
            maxVoltage: data.maxVoltage,
            minCurrent: data.minCurrent,
            maxCurrent: data.maxCurrent,
          };
          setMinMaxSpecs(minMaxSpecs);

          setSpecsCount(data.specsCount);
        } else {
          throw new Error("Spec section data format is incorrect");
        }

        setIsSpecSectionLoading(false);
      })
      .catch((error) => {
        console.error("Spec section fetch error:", error);
        setIsSpecSectionLoading(false);
      });
      
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

        setIsSpecSectionLoading(false);
      })
      .catch((error) => {
        console.error("Spec section fetch error:", error);
        setIsSpecSectionLoading(false);
      });
  }, []);

  const recvOrderFn = () => {
    console.log("Receiving battery order");
    fetch(config.apiBaseUrl + "/triage", {
      method: "GET",
      // body: JSON.stringify("Here's the body"),
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
        if (data && data.status) {
          console.log("Status is: " + data.status);
          setTriageStatus(data.status);
        } else {
          throw new Error("Data format is incorrect");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });

    console.log("Finished receiving battery order");
  };

  return (
    <div>
      <Card>
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>New Orders</h2>
          <section className={classes.sectionContents}>
            <button type="button" onClick={recvOrderFn}>
              Receive Order
            </button>
          </section>
          <section className={classes.sectionContents}>
            Recent Status: {triageStatus}
          </section>
        </section>
      </Card>
      <div className={classes.gridContainer}>
        {/* Total # Orders [Triage Button]
      Most recent order:
      <Recent Order Info> */}
        <Card>
          <section className={classes.section}>
            <Link className={classes.link} to="/ops">
              <h2 className={classes.sectionTitle}>Ops</h2>
            </Link>
            <section className={classes.sectionContents}>
              <h2>Battery Statuses</h2>
              {isOpsSectionLoading ? (
                <p>Loading...</p>
              ) : (
                <PieChartVis
                  chartTitle="Battery Statuses"
                  data={batteryStatusCounts}
                />
                // <ul>
                //   {batteryStatusCounts.map((item) => (
                //     // <li key={item.id}>
                //     //   {item.tier}: {item.count}
                //     // </li>
                //      <li key={item.name}>
                //        {item.name}: {item.value}
                //      </li>
                //   ))}
                // </ul>
              )}

              {/* <h2>Customer Counts</h2>
              {isOpsSectionLoading ? <p>Loading...</p> : <p>{customerCount}</p>} */}

              {/* > Avail Batts, Batts on Hold, Batts completed */}
            </section>
          </section>
        </Card>
        <Card>
          <section className={classes.section}>
            <Link className={classes.link} to="/lab">
              <h2 className={classes.sectionTitle}>Lab</h2>
            </Link>
            <section className={classes.sectionContents}>
              <h2>Plan Statuses</h2>
              {isLabSectionLoading ? (
                <p>Loading...</p>
              ) : (
                <PieChartVis chartTitle="Lab Statuses" data={labStatusCounts} />
                // <ul>
                //   {labStatusCounts.map((item) => (
                //     // <li key={item.id}>
                //     //   {item.labPlanStatus}: {item.count}
                //     // </li>
                //     <li key={item.name}>
                //       {item.name}: {item.value}
                //     </li>
                //   ))}
                // </ul>
              )}

              {/* > # Current Lab Batts / Total Lab Batts */}
            </section>
          </section>
        </Card>
        <Card>
          <section className={classes.section}>
            <Link className={classes.link} to="/storage">
              <h2 className={classes.sectionTitle}>Storage</h2>
            </Link>
            <section className={classes.sectionContents}>
              {/* <h2>Storage Stats</h2> */}
              {isStorageSectionLoading ? (
                <p>Loading...</p>
              ) : (
                // <RadarChartVis
                //   chartTitle="Battery Statuses"
                //   bucket="batteryTierId"
                //   subsetName="Used"
                //   subsetDataKey="usedStorage"
                //   supersetName="Capacity"
                //   supersetDataKey="capacity"
                //   data={storageStats}
                //   // bucket="subject"
                //   // subsetName="Mike"
                //   // subsetDataKey="A"
                //   // supersetName="Dan"
                //   // supersetDataKey="B"
                //   // data={data}
                // />
                <BarChartVis
                  chartTitle="Battery Statuses"
                  xAxisTitleKey="Storage Tier"
                  xAxisLabelKey="batteryTierId"
                  bottomBarKey="usedStorage"
                  topBarKey="availStorage"
                  data={storageStats}
                />
              )}
              {/* > Total Usage / Total Capacity */}
            </section>
          </section>
        </Card>
        <Card>
          <section className={classes.section}>
            <Link className={classes.link} to="/spec">
              <h2 className={classes.sectionTitle}>Spec</h2>
            </Link>
            <section className={classes.sectionContents}>
              <h2>Tier Counts</h2>
              {isSpecSectionLoading ? (
                <p>Loading...</p>
              ) : (
                // <PieChartVis chartTitle="Tier Counts" data={tierCounts} />
                <TreemapChartVis chartTitle="Tier Counts" data={batterySpecs} />
                // <ul>
                //   {tierCounts.map((item) => (
                //     // <li key={item.id}>
                //     //   {item.tier}: {item.count}
                //     // </li>
                //      <li key={item.name}>
                //        {item.name}: {item.value}
                //      </li>
                //   ))}
                // </ul>
              )}

              <h2>Min/Max Values</h2>
              {isSpecSectionLoading ? (
                <p>Loading...</p>
              ) : (
                <ul>
                  <li>minVolt: {minMaxSpecs?.minVoltage}</li>
                  <li>maxVolt: {minMaxSpecs?.maxVoltage}</li>
                  <li>minCur: {minMaxSpecs?.minCurrent}</li>
                  <li>maxCur: {minMaxSpecs?.maxCurrent}</li>
                </ul>
              )}

              {/* <h2>Spec Counts</h2>
              {isSpecSectionLoading ? <p>Loading...</p> : <p>{specsCount}</p>} */}
              {/* > Total # Specs */}
            </section>
          </section>
        </Card>
      </div>
    </div>
  );
}
