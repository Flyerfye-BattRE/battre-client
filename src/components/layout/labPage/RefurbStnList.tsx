import RefurbStnItem from "./RefurbStnItem";

export default function RefurbStnList(props) {
  return (
    <section>
      <h2>Refurb Stations</h2>
      <ul>
        {props.refurbStns.map((stn) => (
          <RefurbStnItem
            key={stn.id}
            refurbStnId={stn.refurbStnId || ""}
            refurbStationClass={stn.refurbStationClass || ""}
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
