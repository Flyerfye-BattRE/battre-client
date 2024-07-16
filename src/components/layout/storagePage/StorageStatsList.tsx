import StorageStatsItem from "./StorageStatsItem";
import classes from "../TableList.module.css";
import { StorageStats } from "../../../pages/StoragePage";

type StorageStatsListProp = {
  storageStats: StorageStats[];
};

export default function StorageStatsList(props: StorageStatsListProp) {
  return (
    <section className={classes.section}>
      <h2 className={classes.tableTitle}>Battery Storage</h2>
      <table className={classes.dataTable}>
        <thead>
          <tr>
            <td>
              <b>Tier</b>
            </td>
            <td
              title="Filled Storage Slots"
              className={classes.annotatedHeaderColumn}
            >
              <b>Usage</b>
            </td>
            <td
              title="Total Storage Capacity"
              className={classes.annotatedHeaderColumn}
            >
              <b>Cap</b>
            </td>
            <td>
              <b>Usage</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.storageStats.map((stats) => (
            <StorageStatsItem
              key={stats.id}
              id={stats.id}
              batteryTierId={stats.batteryTierId || -1}
              usedStorage={stats.usedStorage || 0}
              availStorage={stats.availStorage || 1}
              capacity={stats.capacity || 1}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
