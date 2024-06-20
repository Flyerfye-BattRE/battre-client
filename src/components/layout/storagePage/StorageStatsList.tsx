import StorageStatsItem from "./StorageStatsItem";
import classes from "../TableList.module.css";

export default function StorageStatsList(props) {
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
              title="Available Storage Slots"
              className={classes.annotatedHeaderColumn}
            >
              <b>Avail</b>
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
              batteryTierId={stats.batteryTierId || ""}
              availStorage={stats.availStorage || ""}
              capacity={stats.capacity || ""}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
