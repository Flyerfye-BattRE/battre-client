export default function StorageStatsItem(props) {
  const percentage = ((props.availStorage / props.capacity) * 100).toFixed(1);

  return (
    <tr>
      <td>{props.batteryTierId}</td>
      <td>{props.availStorage}</td>
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
