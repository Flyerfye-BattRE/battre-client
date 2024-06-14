import { useState } from "react";
import ChangePriorityDialog from "./ChangePriorityDialog";

export default function TesterBacklogItem(props) {
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
        "]"
    );
    fetch("http://localhost:8080/lab/changeBatteryTesterPriority", {
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
              "]"
          );
        } else {
          console.error(
            "Failed to change tester priority for battery " + props.batteryId
          );
        }
      })
      .catch((error) => {
        console.error(
          "Error changing tester priority for battery " +
            props.batteryId +
            ": ",
          error
        );
      });
  };

  return (
    <li>
      <div>
        <h3>
          Entry {props.testerBacklogId} [PRI-{priority}]: Battery{" "}
          {props.batteryId}
        </h3>
        <h4>
          Status:{" "}
          {(props.testerBacklogEndDate && "TESTING DONE") || "BACKLOG WAIT"}
        </h4>
        <h4>&gt;&gt; Start: {props.testerBacklogStartDate}</h4>
        <h4>&gt;&gt; End: {props.testerBacklogEndDate}</h4>
        {!props.testerBacklogEndDate && (
          <button onClick={() => setIsDialogOpen(true)}>Set Priority</button>
        )}
        {isDialogOpen && (
          <ChangePriorityDialog
            initialPriority={priority}
            onApply={handleApply}
            onCancel={handleCancel}
          />
        )}
      </div>
    </li>
  );
}
