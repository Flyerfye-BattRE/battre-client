import React from "react";
import ActionButton from "../ui/ActionButton";
// import classes from "./ApplicationGrid.module.css";

export default function ApplicationGrid() {
  const BUTTON_ID = "button-1";

  const buttonFn = (
  ) => {
    console.log('Clicked the button')
    fetch(
      'http://localhost:8080/spec/getBatteryTiers',
      {
        method: 'GET',
        // body: JSON.stringify("Here's the body"),
        headers: {
          // 'Content-Type': 'application/json'
        }
      }
    )
    
    console.log('Finished button click')
  };

  return (
    <div>
      Application Grid<br /><br />
      
      {/* Renders the points returned from the edge algorithm on top of the polygon image */}
      <ActionButton
        // className={classes.button}
        buttonId={BUTTON_ID}
        text="ButtonText"
        actionFn={buttonFn}
      />
    </div>
  );
}