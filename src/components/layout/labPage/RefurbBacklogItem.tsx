export default function RefurbBacklogItem(props) {
  return (
    <li>
      <div>
        <h3>
          Entry {props.refurbPlanId} [PRI-{props.refurbPlanPriority}]: Battery{" "}
          {props.batteryId}
        </h3>
        <h4>
          Status: {(props.available && "AVAILABLE") || "REFURB IN PROGRESS"}
        </h4>
        <h4>&gt;&gt; Start: {props.refurbPlanStartDate}</h4>
        <h4>&gt;&gt; End: {props.refurbPlanEndDate}</h4>
        {props.resolder && (
          <h4>&gt;&gt; Resolder: {props.optionalResolderRecordId || "TBD"}</h4>
        )}
        {props.repack && (
          <h4>&gt;&gt; Repack: {props.optionalResolderRecordId || "TBD"}</h4>
        )}
        {props.processorSwap && (
          <h4>
            &gt;&gt; Processor Swap: {props.optionalResolderRecordId || "TBD"}
          </h4>
        )}
        {props.capacitorSwap && (
          <h4>
            &gt;&gt; Capacitor Swap: {props.optionalResolderRecordId || "TBD"}
          </h4>
        )}
      </div>
    </li>
  );
}
