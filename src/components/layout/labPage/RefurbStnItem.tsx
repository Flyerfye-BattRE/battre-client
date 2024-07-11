import { RefurbStation } from "../../../pages/LabStationsPage";
import { formatDate } from "../../../utils/utils";
import classes from "../TableItem.module.css";

export default function RefurbStnItem(props: RefurbStation) {
  const [fRefurbStnLongActiveDate, fRefurbStnShortActiveDate] = formatDate(
    props.lastActiveDate
  );
  const [fRefurbStnLongLastCalDate, fRefurbStnShortLastCalDate] = formatDate(
    props.lastCalibrationDate
  );
  const [fRefurbStnLongNextCalDate, fRefurbStnShortNextCalDate] = formatDate(
    props.nextCalibrationDate
  );

  return (
    <tr>
      <td>{props.refurbStnId}</td>
      <td>{props.refurbStationClass}</td>
      <td className={classes.summaryColumn}>
        {(props.inUse &&
          "IN USE [" + props.optionalActiveBatteryId + "]") ||
          "AVAILABLE"}
      </td>
      <td className={classes.annotatedRowCell} title={fRefurbStnLongActiveDate}>
        {fRefurbStnShortActiveDate}
      </td>
      <td className={classes.annotatedRowCell} title={fRefurbStnLongLastCalDate}>
        {fRefurbStnShortLastCalDate}
      </td>
      <td className={classes.annotatedRowCell} title={fRefurbStnLongNextCalDate}>
        {fRefurbStnShortNextCalDate}
      </td>
    </tr>
    // <li>
    //   <div>
    //     <h3>
    //       Station {props.refurbStnId}: Class {props.refurbStationClass}
    //     </h3>
    //     <h4>
    //       Status:{" "}
    //       {(props.inUse &&
    //         "IN USE [BatteryId " + props.optionalActiveBatteryId + "]") ||
    //         "AVAILABLE"}
    //     </h4>
    //     <h4>&gt;&gt; Last Active: {props.lastActiveDate}</h4>
    //     <h4>&gt;&gt; Last Callibration: {props.lastCalibrationDate}</h4>
    //     <h4>&gt;&gt; Next Callibration: {props.nextCalibrationDate}</h4>
    //   </div>
    // </li>
  );
}
