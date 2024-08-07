import BatteryInvItem from "./BatteryInvItem";
import classes from "../TableList.module.css";
import { BatteryInv } from "../../../pages/OpsBatteryPage";

type BatteryInvProp = {
  batteryInv: BatteryInv[];
  updateFn: () => void;
};

export default function BatteryInvList(props: BatteryInvProp) {
  return (
    <section className={classes.section}>
      <h2 className={classes.tableTitle}>Battery Inventory</h2>
      <table className={classes.dataTable}>
        <thead>
          <tr>
            <td>
              <b>#</b>
            </td>
            <td>
              <b>Type</b>
            </td>
            <td>
              <b>Status</b>
            </td>
            <td title="Intake Order" className={classes.annotatedHeaderColumn}>
              <b>In</b>
            </td>
            <td title="Output Order" className={classes.annotatedHeaderColumn}>
              <b>Out</b>
            </td>
            <td title="Hold Id" className={classes.annotatedHeaderColumn}>
              <b>Hold</b>
            </td>
            <td>
              <b>Actions</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.batteryInv.map((batteryInv) => (
            <BatteryInvItem
              key={batteryInv.id}
              id={batteryInv.id}
              batteryId={batteryInv.batteryId || ""}
              batteryStatus={batteryInv.batteryStatus}
              batteryTypeId={batteryInv.batteryTypeId}
              intakeOrderId={batteryInv.intakeOrderId}
              optionalHoldId={batteryInv.optionalHoldId || ""}
              optionalOutputOrderId={batteryInv.optionalOutputOrderId || ""}
              updateFn={props.updateFn}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
