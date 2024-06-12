import StorageStatsItem from "./StorageStatsItem";

export default function StorageStatsList(props) {
  return (
    <section>
      <ul>
        {props.storageStats.map((stats) => (
          <StorageStatsItem
            key={stats.id}
            batteryTierId={stats.batteryTierId || 'DEF_batteryTierId'}
            availStorage={stats.availStorage || 'DEF_availStorage'}
            capacity={stats.capacity || 'DEF_capacity'}
          />
        ))}
      </ul>
    </section>
  );
}
