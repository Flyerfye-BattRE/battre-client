import TesterStnItem from "./TesterStnItem";

export default function TesterStnList(props) {
  return (
    <section>
      <h2>Tester Stations</h2>
      <ul>
        {props.testerStns.map((stn) => (
          <TesterStnItem
            key={stn.id}
            testerStnId={stn.testerStnId || ""}
            terminalLayoutId={stn.terminalLayoutId || ""}
            inUse={stn.inUse}
            optionalActiveBatteryId={stn.optionalActiveBatteryId || ""}
            lastActiveDate={stn.lastActiveDate || ""}
            lastCalibrationDate={stn.lastCalibrationDate || ""}
            nextCalibrationDate={stn.nextCalibrationDate || ""}
          />
        ))}
      </ul>
    </section>
  );
}
