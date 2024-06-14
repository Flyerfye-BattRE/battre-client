export default function BatteryTierItem(props) {
  return (
    <li>
      <div>
        <h3>
          Lab Plan {props.labPlanId}[Battery {props.batteryId}]:{" "}
          {props.labPlanStatus}
        </h3>
        <h4>&gt;&gt; Tester Record {props.optionalTesterRecordId}</h4>
        <h4>&gt;&gt; Refurb Record {props.optionalRefurbPlanId}</h4>
      </div>
    </li>
  );
}
