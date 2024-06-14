import StorageStatsItem from "./StorageStatsItem";

export default function StorageStatsList(props) {
  return (
    <section>
      <ul>
        {props.storageStats.map((stats) => (
          <StorageStatsItem
            key={stats.id}
            batteryTierId={stats.batteryTierId || ""}
            availStorage={stats.availStorage || ""}
            capacity={stats.capacity || ""}
          />
        ))}
      </ul>
    </section>
  );
}
