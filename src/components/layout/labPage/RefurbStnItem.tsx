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
  );
}
