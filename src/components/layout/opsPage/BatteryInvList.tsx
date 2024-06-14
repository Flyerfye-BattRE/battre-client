import BatteryInvItem from "./BatteryInvItem";

export default function BatteryInvList(props) {
  return (
    <section>
      <ul>
        {props.batteryInv.map((batteryInv) => (
          <BatteryInvItem
            key={batteryInv.id}
            batteryId={batteryInv.batteryId || ""}
            batteryStatus={batteryInv.batteryStatus}
            batteryTypeId={batteryInv.batteryTypeId}
            intakeOrderId={batteryInv.intakeOrderId}
            optional_holdId={batteryInv.optional_holdId || ""}
            optional_outputOrderId={batteryInv.optional_outputOrderId || ""}
            updateFn={props.updateFn}
          />
        ))}
      </ul>
    </section>
  );
}
