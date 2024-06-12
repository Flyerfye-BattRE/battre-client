import CustomerItem from "./CustomerItem";

export default function CustomerList(props) {
  return (
    <section>
      <ul>
        {props.customerList.map((cust) => (
          <CustomerItem
            key={cust.id}
            customerId={cust.customerId || 'DEF_customerId'}
            lastName={cust.lastName || 'DEF_lastName'}
            firstName={cust.firstName || 'DEF_firstName'}
            email={cust.email || 'DEF_email'}
            phone={cust.phone || 'DEF_phone'}
            address={cust.address || 'DEF_address'}
            loyaltyId={cust.loyaltyId || 'DEF_loyaltyId'}
          />
        ))}
      </ul>
    </section>
  );
}
