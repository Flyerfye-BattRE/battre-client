import { formatDate } from "../../../utils/utils";
import classes from "../TableItem.module.css";

export default function TesterStnItem(props) {
  const [fTesterStnLongActiveDate, fTesterStnShortActiveDate] = formatDate(
    props.lastActiveDate
  );
  const [fTesterStnLongLastCalDate, fTesterStnShortLastCalDate] = formatDate(
    props.lastCalibrationDate
  );
  const [fTesterStnLongNextCalDate, fTesterStnShortNextCalDate] = formatDate(
    props.nextCalibrationDate
  );

  return (
    <tr>
      <td>{props.testerStnId}</td>
      <td>{props.terminalLayoutId}</td>
      <td className={classes.summaryColumn}>
        {(props.inUse &&
          "IN USE [" + props.optionalActiveBatteryId + "]") ||
          "AVAILABLE"}
      </td>
      <td className={classes.annotatedRowCell} title={fTesterStnLongActiveDate}>
        {fTesterStnShortActiveDate}
      </td>
      <td className={classes.annotatedRowCell} title={fTesterStnLongLastCalDate}>
        {fTesterStnShortLastCalDate}
      </td>
      <td className={classes.annotatedRowCell} title={fTesterStnLongNextCalDate}>
        {fTesterStnShortNextCalDate}
      </td>
    </tr>
    // <li>
    //   <div>
    //     <h3>
    //       Station {props.testerStnId}: Layout {props.terminalLayoutId}
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
