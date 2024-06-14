import TesterBacklogItem from "./TesterBacklogItem";

export default function TesterBacklogList(props) {
  return (
    <section>
      <h2>Tester Backlog</h2>
      <ul>
        {props.testerBacklog.map((entry) => (
          <TesterBacklogItem
            key={entry.id}
            testerBacklogId={entry.testerBacklogId || ""}
            batteryId={entry.batteryId || ""}
            testerBacklogPriority={entry.testerBacklogPriority || ""}
            testerBacklogStartDate={entry.testerBacklogStartDate || ""}
            testerBacklogEndDate={entry.testerBacklogEndDate || ""}
          />
        ))}
      </ul>
    </section>
  );
}
