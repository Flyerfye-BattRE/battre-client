import BatterySpecsItem from "./BatterySpecsItem";
import classes from "../TableList.module.css";

export default function BatterySpecsList(props) {
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
              <b>Tier</b>
            </td>
            <td
              title="Manufacturer"
              className={classes.annotatedHeaderColumn}
            >
              <b>Mfc</b>
            </td>
            <td title="Terminal Layout ID" className={classes.annotatedHeaderColumn}>
              <b>TL</b>
            </td>
            <td>
              <b>Composition</b>
            </td>
            <td>
              <b>Safety</b>
            </td>
            <td title="Min/Max Voltage Range (V)" className={classes.annotatedHeaderColumn}>
              <b>V Range</b>
            </td>
            <td title="Min/Max Current Range (mA)" className={classes.annotatedHeaderColumn}>
              <b>Cur Range</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.batterySpecs.map((spec) => (
            <BatterySpecsItem
              key={spec.id}
              batteryTypeId={spec.batteryTypeId || ""}
              mfc={spec.mfc || ""}
              terminalLayoutId={spec.terminalLayoutId || ""}
              tierId={spec.tierId || ""}
              composition={spec.composition || ""}
              safetyInfo={spec.optionalSafetyInfo || ""}
              minVoltage={spec.optionalMinVoltage || ""}
              maxVoltage={spec.optionalMaxVoltage || ""}
              minCurrent={spec.optionalMinCurrent || ""}
              maxCurrent={spec.optionalMaxCurrent || ""}
            />
          ))}
        </tbody>
      </table>
      {/* <ul>
        {props.batterySpecs.map((spec) => (
          <BatterySpecsItem
            key={spec.id}
            batteryTypeId={spec.batteryTypeId || ""}
            mfc={spec.mfc || ""}
            terminalLayoutId={spec.terminalLayoutId || ""}
            tierId={spec.tierId || ""}
            composition={spec.composition || ""}
            safetyInfo={spec.optionalSafetyInfo || ""}
            minVoltage={spec.optionalMinVoltage || ""}
            maxVoltage={spec.optionalMaxVoltage || ""}
            minCurrent={spec.optionalMinCurrent || ""}
            maxCurrent={spec.optionalMaxCurrent || ""}
          />
        ))}
      </ul> */}
    </section>
  );
}
