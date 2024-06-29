import { useState } from "react";
import ChangePriorityDialog from "./ChangePriorityDialog";
import classes from "../TableItem.module.css";
import { formatDate } from "../../../utils/utils";
import config from "../../../config/config";

export default function RefurbBacklogItem(props) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [priority, setPriority] = useState<number>(props.refurbPlanPriority);

  const handleApply = (newPriority: number) => {
    changeRefurbPriorityFn(newPriority);
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  const changeRefurbPriorityFn = (newPriority: number) => {
    console.log(
      "Changing refurb priority for battery " +
        props.batteryId +
        " from [" +
        newPriority +
        "] to [" +
        priority +
        "]"
    );
    fetch(config.apiBaseUrl + "/lab/changeBatteryRefurbPriority", {
      method: "POST",
      headers: {
        batteryId: props.batteryId,
        priority: newPriority.toString(),
      },
    })
      .then((response) => {
        if (response.ok) {
          setPriority(newPriority);
          console.log(
            "Finished changing refurb priority for battery " +
              props.batteryId +
              " to [" +
              newPriority +
              "]"
          );
        } else {
          console.error(
            "Failed to change refurb priority for battery " + props.batteryId
          );
        }
      })
      .catch((error) => {
        console.error(
          "Error changing refurb priority for battery " +
            props.batteryId +
            ": ",
          error
        );
      });
  };

  const [fRefurbPlanLongStartDate, fRefurbPlanShortStartDate] = formatDate(
    props.refurbPlanStartDate
  );
  const [fRefurbPlanLongEndDate, fRefurbPlanShortEndDate] =
    props.refurbPlanEndDate
      ? formatDate(props.refurbPlanEndDate)
      : [undefined, null];

  return (
    <tr>
      <td>{props.refurbPlanId}</td>
      <td>{props.batteryId}</td>
      <td className={classes.summaryColumn}>
        {(props.refurbPlanEndDate && "REFURBED") ||
          (props.available && "QUEUED") ||
          "IN PROG"}
      </td>
      <td className={classes.annotatedRowCell} title={fRefurbPlanLongStartDate}>
        {fRefurbPlanShortStartDate}
      </td>
      <td className={classes.annotatedRowCell} title={fRefurbPlanLongEndDate}>
        {fRefurbPlanShortEndDate}
      </td>
      <td>
        {(props.resolder && (props.optionalResolderRecordId || "TBD"))}
      </td>
      <td>
        {(props.repack && (props.optionalRepackRecordId || "TBD"))}
      </td>
      <td>
        {(props.processorSwap && (props.optionalProcessorSwapRecordId || "TBD"))}
      </td>
      <td>
        {(props.capacitorSwap && (props.optionalCapacitorSwapRecordId || "TBD"))}
      </td>
      <td className={classes.priorityColumn}>
        {(!fRefurbPlanShortEndDate && (
          <button onClick={() => setIsDialogOpen(true)}>{priority}</button>
        )) ||
          "DONE"}
        {isDialogOpen && (
          <ChangePriorityDialog
            initialPriority={priority}
            onApply={handleApply}
            onCancel={handleCancel}
          />
        )}
      </td>
    </tr>
    // <li>
    //   <div>
    //     <h3>
    //       Entry {props.refurbPlanId} [PRI-{priority}]: Battery {props.batteryId}
    //     </h3>
    //     <h4>
    //       Status:{" "}
    //       {(props.refurbPlanEndDate && "REFURBED") ||
    //         (props.available && "QUEUED") ||
    //         "IN PROG"}
    //     </h4>
    //     <h4>&gt;&gt; Start: {props.refurbPlanStartDate}</h4>
    //     <h4>&gt;&gt; End: {props.refurbPlanEndDate}</h4>
    //     {props.resolder && (
    //       <h4>&gt;&gt; Resolder: {props.optionalResolderRecordId || "TBD"}</h4>
    //     )}
    //     {props.repack && (
    //       <h4>&gt;&gt; Repack: {props.optionalRepackRecordId || "TBD"}</h4>
    //     )}
    //     {props.processorSwap && (
    //       <h4>
    //         &gt;&gt; Processor Swap:{" "}
    //         {props.optionalProcessorSwapRecordId || "TBD"}
    //       </h4>
    //     )}
    //     {props.capacitorSwap && (
    //       <h4>
    //         &gt;&gt; Capacitor Swap:{" "}
    //         {props.optionalCapacitorSwapRecordId || "TBD"}
    //       </h4>
    //     )}
    //     {!props.refurbPlanEndDate && (
    //       <button onClick={() => setIsDialogOpen(true)}>Set Priority</button>
    //     )}
    //     {isDialogOpen && (
    //       <ChangePriorityDialog
    //         initialPriority={priority}
    //         onApply={handleApply}
    //         onCancel={handleCancel}
    //       />
    //     )}
    //   </div>
    // </li>
  );
}
