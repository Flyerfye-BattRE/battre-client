import { BatterySpecs } from "../../../pages/SpecsPage";
import classes from "../TableItem.module.css";

export default function BatterySpecsItem(props: BatterySpecs) {
  return (
    <tr>
      <td>{props.batteryTypeId}</td>
      <td>{props.batteryName}</td>
      <td>{props.tierLabel}</td>
      <td>{props.mfc}</td>
      <td>{props.terminalLayoutId}</td>
      <td>{props.composition}</td>
      <td className={classes.annotatedRowCell} title={props.optionalSafetyInfo}>
        {props.optionalSafetyInfo && "INFO"}
      </td>
      <td>
        {props.optionalMinVoltage || "?"}-{props.optionalMaxVoltage || "?"} V
      </td>
      <td>
        {props.optionalMinCurrent || "?"}-{props.optionalMaxCurrent || "?"} mA
      </td>
    </tr>
  );
}
