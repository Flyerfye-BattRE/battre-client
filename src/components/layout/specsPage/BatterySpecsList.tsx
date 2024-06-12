import BatterySpecsItem from "./BatterySpecsItem";

export default function BatterySpecsList(props) {
  return (
    <section>
      <ul>
        {props.batterySpecs.map((spec) => (
          <BatterySpecsItem
            key={spec.id}
            batteryTypeId={spec.batteryTypeId || 'DEF_batteryTypeId'}
            mfc={spec.mfc || 'DEF_mfc'}
            terminalLayoutId={spec.terminalLayoutId || 'DEF_terminalLayoutId'}
            tierId={spec.tierId || 'DEF_tierId'}
            composition={spec.composition || 'DEF_composition'}
            safetyInfo={spec.optionalSafetyInfo || 'DEF_safetyInfo'}
            minVoltage={spec.optionalMinVoltage || 'DEF_minVoltage'}
            maxVoltage={spec.optionalMaxVoltage || 'DEF_maxVoltage'}
            minCurrent={spec.optionalMinCurrent || 'DEF_minCurrent'}
            maxCurrent={spec.optionalMaxCurrent || 'DEF_maxCurrent'}
          />
        ))}
      </ul>
    </section>
  );
}
