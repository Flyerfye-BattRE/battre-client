interface LabPlanItemProps {
  labPlanId: number;
  batteryId: number;
  labPlanStatus: number;
  optionalTesterRecordId: number;
  optionalRefurbPlanId: number;
}

export default function LabPlanItem(props: LabPlanItemProps) {
  return (
    <tr>
      <td>{props.labPlanId}</td>
      <td>{props.batteryId}</td>
      <td>{props.labPlanStatus}</td>
      <td>{props.optionalTesterRecordId || "TBD"}</td>
      <td>{props.optionalRefurbPlanId || "TBD"}</td>
    </tr>
  );
}
