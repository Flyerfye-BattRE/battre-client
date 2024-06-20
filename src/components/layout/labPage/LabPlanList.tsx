import LabPlanItem from "./LabPlanItem";
import classes from "../TableList.module.css";

export default function LabPlanList(props) {
  return (
    <section className={classes.section}>
      <h2 className={classes.tableTitle}>Lab Plans</h2>
      <table className={classes.dataTable}>
        <thead>
          <tr>
            <td>
              <b>#</b>
            </td>
            <td>
              <b>Battery</b>
            </td>
            <td>
              <b>Status</b>
            </td>
            <td title="Test Record ID" className={classes.annotatedHeaderColumn}>
              <b>TID</b>
            </td>
            <td title="Refurb Record ID" className={classes.annotatedHeaderColumn}>
              <b>RID</b>
            </td>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      {/* <ul>
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
      </ul> */}
    </section>
  );
}
