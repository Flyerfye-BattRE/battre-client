import LabPlanItem from "./LabPlanItem";

export default function LabPlanList(props) {
  return (
    <section>
      <ul>
        {props.labPlans.map((plan) => (
          <LabPlanItem
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
