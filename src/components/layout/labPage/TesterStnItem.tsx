import { TesterStation } from "../../../pages/LabStationsPage";
import { formatDate } from "../../../utils/utils";
import classes from "../TableItem.module.css";

export default function TesterStnItem(props: TesterStation) {
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
  );
}
