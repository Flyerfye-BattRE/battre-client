import CustomerItem from "./CustomerItem";
import classes from "../TableList.module.css";

export default function CustomerList(props) {
  return (
    <section className={classes.section}>
      <h2 className={classes.tableTitle}>Customer List</h2>
      <table className={classes.dataTable}>
        <thead>
          <tr>
            <td>
              <b>Name</b>
            </td>
            <td>
              <b>Phone</b>
            </td>
            <td>
              <b>E-Mail</b>
            </td>
            <td>
              <b>Address</b>
            </td>
            <td>
              <b>LoyaltyId</b>
            </td>
            <td>
              <b>Actions</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.customerList.map((cust) => (
            <CustomerItem
              key={cust.id}
              customerId={cust.customerId || ""}
              lastName={cust.lastName || ""}
              firstName={cust.firstName || ""}
              email={cust.email || ""}
              phone={cust.phone || ""}
              address={cust.address || ""}
              loyaltyId={cust.loyaltyId || ""}
              updateFn={props.updateFn}
            />
          ))}
        </tbody>
      </table>
      {/* <ul>
        {props.customerList.map((cust) => (
          <CustomerItem
            key={cust.id}
            customerId={cust.customerId || ""}
            lastName={cust.lastName || ""}
            firstName={cust.firstName || ""}
            email={cust.email || ""}
            phone={cust.phone || ""}
            address={cust.address || ""}
            loyaltyId={cust.loyaltyId || ""}
            updateFn={props.updateFn}
          />
        ))}
      </ul> */}
    </section>
  );
}
