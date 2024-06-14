import BatterySpecsItem from "./BatterySpecsItem";

export default function BatterySpecsList(props) {
  return (
    <section>
      <ul>
        {props.batterySpecs.map((spec) => (
          <BatterySpecsItem
            key={spec.id}
            batteryTypeId={spec.batteryTypeId || ""}
            mfc={spec.mfc || ""}
            terminalLayoutId={spec.terminalLayoutId || ""}
            tierId={spec.tierId || ""}
            composition={spec.composition || ""}
            safetyInfo={spec.optionalSafetyInfo || ""}
            minVoltage={spec.optionalMinVoltage || ""}
            maxVoltage={spec.optionalMaxVoltage || ""}
            minCurrent={spec.optionalMinCurrent || ""}
            maxCurrent={spec.optionalMaxCurrent || ""}
          />
        ))}
      </ul>
    </section>
  );
}
