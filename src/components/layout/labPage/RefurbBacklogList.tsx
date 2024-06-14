import RefurbBacklogItem from "./RefurbBacklogItem";

export default function RefurbBacklogList(props) {
  return (
    <section>
      <h2>Refurb Backlog</h2>
      <ul>
        {props.refurbBacklog.map((entry) => (
          <RefurbBacklogItem
            key={entry.id}
            refurbPlanId={entry.refurbPlanId || ""}
            batteryId={entry.batteryId || ""}
            refurbPlanPriority={entry.refurbPlanPriority || ""}
            refurbPlanStartDate={entry.refurbPlanStartDate || ""}
            refurbPlanEndDate={entry.refurbPlanEndDate || ""}
            // available={entry.available}
            available={false}
            resolder={entry.resolder}
            optionalResolderRecordId={entry.optionalResolderRecordId}
            repack={entry.repack}
            optionalRepackRecordId={entry.optionalRepackRecordId}
            processorSwap={entry.processorSwap}
            optionalProcessorSwapRecordId={entry.optionalProcessorSwapRecordId}
            capacitorSwap={entry.capacitorSwap}
            optionalCapacitorSwapRecordId={entry.optionalCapacitorSwapRecordId}
          />
        ))}
      </ul>
    </section>
  );
}
