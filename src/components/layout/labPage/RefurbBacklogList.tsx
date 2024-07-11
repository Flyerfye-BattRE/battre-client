import RefurbBacklogItem from "./RefurbBacklogItem";
import classes from "../TableList.module.css";


interface RefurbBacklogListProps {
  refurbBacklog: any;
}

export default function RefurbBacklogList(props: RefurbBacklogListProps) {
  return (
    <section className={classes.section}>
      <h2 className={classes.tableTitle}>Refurb Backlog</h2>
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
            <td
              title="Resolder"
              className={classes.annotatedHeaderColumn}
            >
              <b>RS</b>
            </td>
            <td
              title="Repack"
              className={classes.annotatedHeaderColumn}
            >
              <b>RP</b>
            </td>
            <td
              title="Processor Swap"
              className={classes.annotatedHeaderColumn}
            >
              <b>PS</b>
            </td>
            <td
              title="Capacitor Swap"
              className={classes.annotatedHeaderColumn}
            >
              <b>CS</b>
            </td>
            <td
              title="Lower priority #'s run before higher #'s"
              className={classes.annotatedHeaderColumn}
            >
              <b>Priority</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.refurbBacklog.map((entry) => (
            <RefurbBacklogItem
              key={entry.id}
              id={entry.id}
              refurbPlanId={entry.refurbPlanId || ""}
              batteryId={entry.batteryId || ""}
              refurbPlanPriority={entry.refurbPlanPriority || ""}
              refurbPlanStartDate={entry.refurbPlanStartDate || ""}
              refurbPlanEndDate={entry.refurbPlanEndDate || ""}
              available={entry.available}
              // available={false}
              resolder={entry.resolder}
              optionalResolderRecordId={entry.optionalResolderRecordId}
              repack={entry.repack}
              optionalRepackRecordId={entry.optionalRepackRecordId}
              processorSwap={entry.processorSwap}
              optionalProcessorSwapRecordId={
                entry.optionalProcessorSwapRecordId
              }
              capacitorSwap={entry.capacitorSwap}
              optionalCapacitorSwapRecordId={
                entry.optionalCapacitorSwapRecordId
              }
            />
          ))}
        </tbody>
      </table>
      {/* <ul>
        {props.refurbBacklog.map((entry) => (
          <RefurbBacklogItem
            key={entry.id}
            refurbPlanId={entry.refurbPlanId || ""}
            batteryId={entry.batteryId || ""}
            refurbPlanPriority={entry.refurbPlanPriority || ""}
            refurbPlanStartDate={entry.refurbPlanStartDate || ""}
            refurbPlanEndDate={entry.refurbPlanEndDate || ""}
            // available={entry.available}
            available={false}
            resolder={entry.resolder}
            optionalResolderRecordId={entry.optionalResolderRecordId}
            repack={entry.repack}
            optionalRepackRecordId={entry.optionalRepackRecordId}
            processorSwap={entry.processorSwap}
            optionalProcessorSwapRecordId={entry.optionalProcessorSwapRecordId}
            capacitorSwap={entry.capacitorSwap}
            optionalCapacitorSwapRecordId={entry.optionalCapacitorSwapRecordId}
          />
        ))}
      </ul> */}
    </section>
  );
}
