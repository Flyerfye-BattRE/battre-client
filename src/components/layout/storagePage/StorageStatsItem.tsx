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
    // <li>
    //   <div>
    //     <h3>
    //       Battery Tier {props.batteryTierId} [{percentage}%]:
    //     </h3>
    //     <h4>
    //       &gt;&gt; {props.availStorage} / {props.capacity}
    //     </h4>
    //   </div>
    // </li>
  );
}
