import React, { useState } from "react";
import classes from "./ChangePriorityDialog.module.css";

interface ChangePriorityDialogProps {
  initialPriority: number;
  onApply: (priority: number) => void;
  onCancel: () => void;
}

export default function ChangePriorityDialog(props: ChangePriorityDialogProps) {
  const [priority, setPriority] = useState<number>(props.initialPriority);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 99) {
      setPriority(value);
    } else if (e.target.value === "") {
      setPriority(1);
    }
  };

  const handleApply = () => {
    if (priority >= 1 && priority <= 99) {
      props.onApply(priority);
    } else {
      alert("Priority must be between 1 and 99.");
    }
  };

  return (
    <div className={classes.customDialog}>
      <div className={classes.dialogContent}>
        <b>Set Priority</b>
        <p>Enter a number between 1 and 99.</p>
        <div className={classes.inputGroup}>
          <input
            type="number"
            value={priority}
            onChange={handleInputChange}
            min="1"
            max="99"
          />
        </div>
        <br />
        <div className={classes.buttonGroup}>
          <button className={classes.applyButton} onClick={handleApply}>
            Apply
          </button>
          <button className={classes.cancelButton} onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
