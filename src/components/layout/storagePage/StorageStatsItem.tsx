import { StorageStats } from "../../../pages/StoragePage";

export default function StorageStatsItem(props: StorageStats) {
  const percentage = ((props.usedStorage / props.capacity) * 100).toFixed(1);

  return (
    <tr>
      <td>{props.batteryTierId}</td>
      <td>{props.usedStorage}</td>
      <td>{props.capacity}</td>
      <td>{percentage}%</td>
    </tr>
  );
}
