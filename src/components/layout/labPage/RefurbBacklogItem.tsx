import { useState } from "react";
import ChangePriorityDialog from "./ChangePriorityDialog";
import classes from "../TableItem.module.css";
import { formatDate } from "../../../utils/utils";
import config from "../../../config/config";
import { RefurbBacklog } from "../../../pages/LabBacklogPage";

export default function RefurbBacklogItem(props: RefurbBacklog) {
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
        "]",
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
              "]",
          );
        } else {
          console.error(
            "Failed to change refurb priority for battery " + props.batteryId,
          );
        }
      })
      .catch((error) => {
        console.error(
          "Error changing refurb priority for battery " +
            props.batteryId +
            ": ",
          error,
        );
      });
  };

  const [fRefurbPlanLongStartDate, fRefurbPlanShortStartDate] = formatDate(
    props.refurbPlanStartDate,
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
      <td>{props.resolder && (props.optionalResolderRecordId || "TBD")}</td>
      <td>{props.repack && (props.optionalRepackRecordId || "TBD")}</td>
      <td>
        {props.processorSwap && (props.optionalProcessorSwapRecordId || "TBD")}
      </td>
      <td>
        {props.capacitorSwap && (props.optionalCapacitorSwapRecordId || "TBD")}
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
  );
}
