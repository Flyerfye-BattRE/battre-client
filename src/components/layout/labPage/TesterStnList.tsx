import TesterStnItem from "./TesterStnItem";
import classes from "../TableList.module.css";
import { TesterStation } from "../../../pages/LabStationsPage";

type TesterStnListProp = {
  testerStns: TesterStation[]
};

export default function TesterStnList(props: TesterStnListProp) {
  return (
    <section className={classes.section}>
      <h2 className={classes.tableTitle}>Tester Stations</h2>
      <table className={classes.dataTable}>
        <thead>
          <tr>
            <td>
              <b>#</b>
            </td>
            <td title="Terminal Layout ID" className={classes.annotatedHeaderColumn}>
              <b>TL</b>
            </td>
            <td>
              <b>Status</b>
            </td>
            <td title="Last Active Date" className={classes.annotatedHeaderColumn}>
              <b>Active</b>
            </td>
            <td title="Previous Calibration Date" className={classes.annotatedHeaderColumn}>
              <b>Prev Cal</b>
            </td>
            <td title="Next Calibration Date" className={classes.annotatedHeaderColumn}>
              <b>Next Cal</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.testerStns.map((stn) => (
            <TesterStnItem
              key={stn.id}
              id={stn.id}
              testerStnId={stn.testerStnId || ""}
              terminalLayoutId={stn.terminalLayoutId || ""}
              inUse={stn.inUse}
              optionalActiveBatteryId={stn.optionalActiveBatteryId || ""}
              lastActiveDate={stn.lastActiveDate || ""}
              lastCalibrationDate={stn.lastCalibrationDate || ""}
              nextCalibrationDate={stn.nextCalibrationDate || ""}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
