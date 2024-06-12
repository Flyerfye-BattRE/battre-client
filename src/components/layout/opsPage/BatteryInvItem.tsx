export default function BatteryInvItem(props) {
  return <li>
    <div>
      <h3>Battery '{props.batteryId}' [Type {props.batteryTypeId}] Status: {props.batteryStatus}</h3>
      <h4>&gt;&gt; Intake Order {props.intakeOrderId}</h4>
      <h4>&gt;&gt; Output Order {props.optional_outputOrderId}</h4>
      <h4>&gt;&gt; Hold {props.optional_holdId}</h4>
    </div>
  </li>;
}