import config from "../../../config/config";
import { BatteryInv } from "../../../pages/OpsBatteryPage";
import DeleteButton from "../../ui/DeleteButton";
import classes from "../TableItem.module.css";

export default function BatteryInvItem(props: BatteryInv) {
  const destroyBatteryFn = () => {
    console.log("Destroying battery [" + props.batteryId + "]");
    fetch(config.apiBaseUrl + "/ops/destroyBattery", {
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
    <tr>
      <td>{props.batteryId}</td>
      <td>{props.batteryTypeId}</td>
      <td>{props.batteryStatus}</td>
      <td>{props.intakeOrderId}</td>
      <td>{props.optionalOutputOrderId}</td>
      <td>{props.optionalHoldId}</td>
      <td>
        <DeleteButton  titleText="Destroy Battery" onClick={destroyBatteryFn} />
        {/* <button type="button" onClick={destroyBatteryFn}>
          Destroy
        </button> */}
      </td>
    </tr>
    // <li>
    //   <div>
    //     <h3>
    //       Battery '{props.batteryId}' [Type {props.batteryTypeId}] Status:{" "}
    //       {props.batteryStatus}
    //     </h3>
    //     <h4>&gt;&gt; Intake Order {props.intakeOrderId}</h4>
    //     <h4>&gt;&gt; Output Order {props.optional_outputOOrderId}</h4>
    //     {props.optional_holdId && (
    //       <h4>&gt;&gt; Hold {props.optional_holdId}</h4>
    //     )}
    //     <h3>
    //       <button type="button" onClick={destroyBatteryFn}>
    //         Destroy
    //       </button>
    //     </h3>
    //   </div>
    // </li>
  );
}
