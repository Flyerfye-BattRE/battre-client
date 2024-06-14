import CustomerItem from "./CustomerItem";

export default function CustomerList(props) {
  return (
    <section>
      <ul>
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
      </ul>
    </section>
  );
}
