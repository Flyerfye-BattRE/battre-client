import BatteryInvItem from "./BatteryInvItem";

export default function BatteryInvList(props) {
  return (
    <section>
      <ul>
        {props.batteryInv.map((batteryInv) => (
          <BatteryInvItem
            key={batteryInv.id}
            batteryId={batteryInv.batteryId || 'DEF_batId'}
            batteryStatus={batteryInv.batteryStatus}
            batteryTypeId={batteryInv.batteryTypeId}
            intakeOrderId={batteryInv.intakeOrderId}
            optional_holdId={batteryInv.optional_holdId || 'DEF_holdId'}
            optional_outputOrderId={batteryInv.optional_outputOrderId || 'DEF_orderId'}
          />
        ))}
      </ul>
    </section>
  );
}
