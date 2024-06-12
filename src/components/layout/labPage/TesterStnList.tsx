import TesterStnItem from "./TesterStnItem";

export default function TesterStnList(props) {
  return (
    <section>
      <h2>Tester Stations</h2>
      <ul>
        {props.testerStns.map((stn) => (
          <TesterStnItem
            key={stn.id}
            testerStnId={stn.testerStnId || 'DEF_testerStnId'}
            terminalLayoutId={stn.terminalLayoutId || 'DEF_terminalLayoutId'}
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
