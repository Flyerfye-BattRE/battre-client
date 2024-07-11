import TesterBacklogItem from "./TesterBacklogItem";
import classes from "../TableList.module.css";
import { TesterBacklog } from "../../../pages/LabBacklogPage";

type TesterBacklogListProp = {
  testerBacklog: TesterBacklog[]
};

export default function TesterBacklogList(props: TesterBacklogListProp) {
  return (
    <section className={classes.section}>
      <h2 className={classes.tableTitle}>Tester Backlog</h2>
      <table className={classes.dataTable}>
        <thead>
          <tr>
            <td>
              <b>#</b>
            </td>
            <td>
              <b>Battery</b>
            </td>
            <td>
              <b>Status</b>
            </td>
            <td>
              <b>Start</b>
            </td>
            <td>
              <b>End</b>
            </td>
            <td title="Lower priority #'s run before higher #'s" className={classes.annotatedHeaderColumn}>
              <b>Priority</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.testerBacklog.map((entry) => (
            <TesterBacklogItem
              key={entry.id}
              id={entry.id}
              testerBacklogId={entry.testerBacklogId || ""}
              batteryId={entry.batteryId || ""}
              testerBacklogPriority={entry.testerBacklogPriority || 50}
              testerBacklogStartDate={entry.testerBacklogStartDate || ""}
              testerBacklogEndDate={entry.testerBacklogEndDate || ""}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
