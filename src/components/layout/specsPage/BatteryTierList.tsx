import BatterySpecsItem from "./BatterySpecsItem";

export default function BatteryTierList(props) {
  return (
    <section>
      <ul>
        {props.labPlans.map((plan) => (
          <BatterySpecsItem
            key={plan.id}
            labPlanId={plan.labPlanId}
            labPlanStatus={plan.labPlanStatus}
            batteryId={plan.batteryId}
            optionalTesterRecordId={plan.optionalTesterRecordId}
            optionalRefurbPlanId={plan.optionalRefurbPlanId}
          />
        ))}
      </ul>
    </section>
  );
}
