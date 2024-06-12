export default function RefurbStnItem(props) {
  return (
    <li>
      <div>
        <h3>
          Station {props.refurbStnId}: Class {props.refurbStationClass}
        </h3>
        <h4>Status: {(props.inUse && "IN USE [BatteryId " + props.optionalActiveBatteryId + "]") || "AVAILABLE"}</h4>
        <h4>&gt;&gt; Last Active: {props.lastActiveDate}</h4>
        <h4>&gt;&gt; Last Callibration: {props.lastCalibrationDate}</h4>
        <h4>&gt;&gt; Next Callibration: {props.nextCalibrationDate}</h4>
      </div>
    </li>
  );
}
