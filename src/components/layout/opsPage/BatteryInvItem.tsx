export default function BatteryInvItem(props) {
  const destroyBatteryFn = () => {
    console.log("Destroying battery [" + props.batteryId + "]");
    fetch("http://localhost:8080/ops/destroyBattery", {
      method: "DELETE",
      headers: {
        batteryId: props.batteryId,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Finished destroying battery [" + props.batteryId + "]");

          // Trigger a re-render
          props.updateFn();
        } else {
          console.error("Failed to destroy battery [" + props.batteryId + "]");
        }
      })
      .catch((error) => {
        console.error(
          "Error destroying battery [" + props.batteryId + "]:",
          error
        );
      });
  };

  return (
    <li>
      <div>
        <h3>
          Battery '{props.batteryId}' [Type {props.batteryTypeId}] Status:{" "}
          {props.batteryStatus}
        </h3>
        <h4>&gt;&gt; Intake Order {props.intakeOrderId}</h4>
        <h4>&gt;&gt; Output Order {props.optional_outputOrderId}</h4>
        {props.optional_holdId && (
          <h4>&gt;&gt; Hold {props.optional_holdId}</h4>
        )}
        <h3>
          <button type="button" onClick={destroyBatteryFn}>
            Destroy
          </button>
        </h3>
      </div>
    </li>
  );
}
