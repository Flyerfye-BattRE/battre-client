import RefurbStnItem from "./RefurbStnItem";

export default function RefurbStnList(props) {
  return (
    <section>
      <h2>Refurb Stations</h2>
      <ul>
        {props.refurbStns.map((stn) => (
          <RefurbStnItem
            key={stn.id}
            refurbStnId={stn.refurbStnId || 'DEF_refurbStnId'}
            refurbStationClass={stn.refurbStationClass || 'DEF_refurbStationClass'}
            inUse={stn.inUse}
            optionalActiveBatteryId={stn.optionalActiveBatteryId || 'DEF_optionalActiveBatteryId'}
            lastActiveDate={stn.lastActiveDate || 'DEF_lastActiveDate'}
            lastCalibrationDate={stn.lastCalibrationDate || 'DEF_lastCalibrationDate'}
            nextCalibrationDate={stn.nextCalibrationDate || 'DEF_nextCalibrationDate'}          
          />
        ))}
      </ul>
    </section>
  );
}
