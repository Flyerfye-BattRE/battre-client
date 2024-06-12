export default function StorageStatsItem(props) {
  const percentage = ((props.availStorage / props.capacity) * 100).toFixed(1);

  return <li>
    <div>
      <h3>Battery Tier {props.batteryTierId} [{percentage}%]:</h3>
      <h4>&gt;&gt; {props.availStorage} / {props.capacity}</h4>
    </div>
  </li>;
}