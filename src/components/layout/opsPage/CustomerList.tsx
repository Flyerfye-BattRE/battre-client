import CustomerItem from "./CustomerItem";
import classes from "../TableList.module.css";
import { CustomerInfo } from "../../../pages/OpsCustomerPage";
import CreateButton from "../../ui/CreateButton";

type CustomerListProp = {
  customerList: CustomerInfo[];
  addCustomerFn: () => void;
  updateFn: () => void;
};

export default function CustomerList(props: CustomerListProp) {
  return (
    <section className={classes.section}>
      <h2 className={classes.tableTitle}>
        Customer List{" "}
        <CreateButton titleText="Add Customer" onClick={props.addCustomerFn} />
      </h2>

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
              id={cust.id}
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
    </section>
  );
}
