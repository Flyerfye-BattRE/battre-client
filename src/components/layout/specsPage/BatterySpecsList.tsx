import BatterySpecsItem from "./BatterySpecsItem";
import classes from "../TableList.module.css";
import { BatterySpecs } from "../../../pages/SpecsPage";

type BatterySpecsListProp = {
  batterySpecs: BatterySpecs[];
};

export default function BatterySpecsList(props: BatterySpecsListProp) {
  return (
    <section className={classes.section}>
      <h2 className={classes.tableTitle}>Battery Specs</h2>
      <table className={classes.dataTable}>
        <thead>
          <tr>
            <td>
              <b>Type</b>
            </td>
            <td>
              <b>Name</b>
            </td>
            <td>
              <b>Tier</b>
            </td>
            <td title="Manufacturer" className={classes.annotatedHeaderColumn}>
              <b>Mfc</b>
            </td>
            <td
              title="Terminal Layout ID"
              className={classes.annotatedHeaderColumn}
            >
              <b>TL</b>
            </td>
            <td>
              <b>Composition</b>
            </td>
            <td>
              <b>Safety</b>
            </td>
            <td
              title="Min/Max Voltage Range (V)"
              className={classes.annotatedHeaderColumn}
            >
              <b>V Range</b>
            </td>
            <td
              title="Min/Max Current Range (mA)"
              className={classes.annotatedHeaderColumn}
            >
              <b>Cur Range</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.batterySpecs.map((spec) => (
            <BatterySpecsItem
              key={spec.id}
              id={spec.id}
              size={spec.size}
              group={spec.group}
              batteryTypeId={spec.batteryTypeId || ""}
              batteryName={spec.batteryName || ""}
              mfc={spec.mfc || ""}
              terminalLayoutId={spec.terminalLayoutId || ""}
              tierLabel={spec.tierLabel || ""}
              composition={spec.composition || ""}
              optionalSafetyInfo={spec.optionalSafetyInfo || ""}
              optionalMinVoltage={spec.optionalMinVoltage || ""}
              optionalMaxVoltage={spec.optionalMaxVoltage || ""}
              optionalMinCurrent={spec.optionalMinCurrent || ""}
              optionalMaxCurrent={spec.optionalMaxCurrent || ""}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
