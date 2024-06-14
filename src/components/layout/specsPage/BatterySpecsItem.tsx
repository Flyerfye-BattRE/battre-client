export default function BatterySpecsItem(props) {
  return (
    <li>
      <div>
        <h3>
          Battery Type {props.batteryTypeId} [Tier {props.tierId}]--{props.mfc}
        </h3>
        <h4>&gt;&gt; Terminal Layout: {props.terminalLayoutId}</h4>
        <h4>&gt;&gt; Composition: {props.composition}</h4>
        <h4>&gt;&gt; Safety Info: {props.safetyInfo}</h4>
        <h4>
          &gt;&gt; Voltage: {props.minVoltage} - {props.maxVoltage} V{" "}
        </h4>
        <h4>
          &gt;&gt; Current: {props.minCurrent} - {props.maxCurrent} mA{" "}
        </h4>
      </div>
    </li>
  );
}
