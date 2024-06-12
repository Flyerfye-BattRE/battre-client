import TesterBacklogItem from "./TesterBacklogItem";

export default function TesterBacklogList(props) {
  return (
    <section>
      <h2>Tester Backlog</h2>
      <ul>
        {props.testerBacklog.map((entry) => (
          <TesterBacklogItem
            key={entry.id}
            testerBacklogId={entry.testerBacklogId || "DEF_testerBacklogId"}
            batteryId={entry.batteryId || "DEF_batteryId"}
            testerBacklogPriority={
              entry.testerBacklogPriority || "DEF_testerBacklogPriority"
            }
            testerBacklogStartDate={
              entry.testerBacklogStartDate || "DEF_testerBacklogStartDate"
            }
            testerBacklogEndDate={
              entry.testerBacklogEndDate || "DEF_testerBacklogEndDate"
            }
          />
        ))}
      </ul>
    </section>
  );
}
