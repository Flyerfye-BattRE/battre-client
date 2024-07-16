import { useState } from "react";
import ChangePriorityDialog from "./ChangePriorityDialog";
import classes from "../TableItem.module.css";
import { formatDate } from "../../../utils/utils";
import config from "../../../config/config";
import { TesterBacklog } from "../../../pages/LabBacklogPage";

export default function TesterBacklogItem(props: TesterBacklog) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [priority, setPriority] = useState<number>(props.testerBacklogPriority);

  const handleApply = (newPriority: number) => {
    changeTesterPriorityFn(newPriority);
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  const changeTesterPriorityFn = (newPriority: number) => {
    console.log(
      "Changing tester priority for battery " +
        props.batteryId +
        " from [" +
        newPriority +
        "] to [" +
        priority +
        "]",
    );
    fetch(config.apiBaseUrl + "/lab/changeBatteryTesterPriority", {
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
            "Finished changing tester priority for battery " +
              props.batteryId +
              " to [" +
              newPriority +
              "]",
          );
        } else {
          console.error(
            "Failed to change tester priority for battery " + props.batteryId,
          );
        }
      })
      .catch((error) => {
        console.error(
          "Error changing tester priority for battery " +
            props.batteryId +
            ": ",
          error,
        );
      });
  };

  const [fTesterBacklogLongStartDate, fTesterBacklogShortStartDate] =
    formatDate(props.testerBacklogStartDate);
  const [fTesterBacklogLongEndDate, fTesterBacklogShortEndDate] =
    props.testerBacklogEndDate
      ? formatDate(props.testerBacklogEndDate)
      : [undefined, null];

  return (
    <tr>
      <td>{props.testerBacklogId}</td>
      <td>{props.batteryId}</td>
      <td className={classes.summaryColumn}>
        {(fTesterBacklogShortEndDate && "TESTED") || "QUEUED"}
      </td>
      <td
        className={classes.annotatedRowCell}
        title={fTesterBacklogLongStartDate}
      >
        {fTesterBacklogShortStartDate}
      </td>
      <td
        className={classes.annotatedRowCell}
        title={fTesterBacklogLongEndDate}
      >
        {fTesterBacklogShortEndDate}
      </td>
      <td className={classes.priorityColumn}>
        {(!fTesterBacklogShortEndDate && (
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
