export default function CustomerItem(props) {
  return <li>
    <div>
      <h3>Customer {props.firstName} {props.lastName} [{props.customerId}]</h3>
      <h4>&gt;&gt; Phone: {props.phone}</h4>
      <h4>&gt;&gt; E-mail: {props.email}</h4>
      <h4>&gt;&gt; Address: {props.address}</h4>
      <h4>&gt;&gt; Loyalty #: {props.loyaltyId}</h4>
    </div>
  </li>;
}