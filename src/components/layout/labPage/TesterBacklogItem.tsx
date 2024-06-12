export default function TesterBacklogItem(props) {
  return (
    <li>
      <div>
        <h3>
          Entry {props.testerBacklogId} [PRI-{props.testerBacklogPriority}]:
          Battery {props.batteryId}
        </h3>
        <h4>&gt;&gt; Start: {props.testerBacklogStartDate}</h4>
        <h4>&gt;&gt; End: {props.testerBacklogEndDate}</h4>
      </div>
    </li>
  );
}
