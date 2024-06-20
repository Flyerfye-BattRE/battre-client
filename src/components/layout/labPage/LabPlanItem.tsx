export default function LabPlanItem(props) {
  return (
    <tr>
      <td>{props.labPlanId}</td>
      <td>{props.batteryId}</td>
      <td>{props.labPlanStatus}</td>
      <td>{props.optionalTesterRecordId || "TBD"}</td>
      <td>{props.optionalRefurbPlanId || "TBD"}</td>
    </tr>
    // <li>
    //   <div>
    //     <h3>
    //       Lab Plan {props.labPlanId}[Battery {props.batteryId}]:{" "}
    //       {props.labPlanStatus}
    //     </h3>
    //     <h4>&gt;&gt; Tester Record {props.optionalTesterRecordId}</h4>
    //     <h4>&gt;&gt; Refurb Record {props.optionalRefurbPlanId}</h4>
    //   </div>
    // </li>
  );
}
