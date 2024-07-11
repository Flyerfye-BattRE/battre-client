import RefurbStnItem from "./RefurbStnItem";
import classes from "../TableList.module.css";
import { RefurbStation } from "../../../pages/LabStationsPage";

type RefurbStationListProp = {
  refurbStns: RefurbStation[]
};

export default function RefurbStnList(props: RefurbStationListProp) {
  return (
    <section className={classes.section}>
      <h2 className={classes.tableTitle}>Refurb Stations</h2>
      <table className={classes.dataTable}>
        <thead>
          <tr>
            <td>
              <b>#</b>
            </td>
            <td>
              <b>Class</b>
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
          {props.refurbStns.map((stn) => (
            <RefurbStnItem
              key={stn.id}
              id={stn.id}
              refurbStnId={stn.refurbStnId || ""}
              refurbStationClass={stn.refurbStationClass || ""}
              inUse={stn.inUse}
              optionalActiveBatteryId={stn.optionalActiveBatteryId || ""}
              lastActiveDate={stn.lastActiveDate || ""}
              lastCalibrationDate={stn.lastCalibrationDate || ""}
              nextCalibrationDate={stn.nextCalibrationDate || ""}
            />
          ))}
        </tbody>
      </table>
      {/* <ul>
        {props.refurbStns.map((stn) => (
          <RefurbStnItem
            key={stn.id}
            refurbStnId={stn.refurbStnId || ""}
            refurbStationClass={stn.refurbStationClass || ""}
            inUse={stn.inUse}
            optionalActiveBatteryId={stn.optionalActiveBatteryId || ""}
            lastActiveDate={stn.lastActiveDate || ""}
            lastCalibrationDate={stn.lastCalibrationDate || ""}
            nextCalibrationDate={stn.nextCalibrationDate || ""}
          />
        ))}
      </ul> */}
    </section>
  );
}
