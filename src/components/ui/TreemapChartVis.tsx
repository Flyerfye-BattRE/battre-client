import React from "react";
import classes from "./TreemapChartVis.module.css";
import { Treemap, Tooltip, ResponsiveContainer } from "recharts";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string | number;
}

interface TreemapChartProps {
  chartTitle: string;
  data: any;
}

export default function TreemapChartVis(props: TreemapChartProps) {
  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const isTreeParent: boolean =
        payload[0].payload.batteryTypeId === undefined;

      const name: string = payload[0].payload.name;
      const size: string = payload[0].payload.size;
      const mfc: string = payload[0].payload.mfc;
      const composition: string = payload[0].payload.composition;
      const SafetyInfo: string = payload[0].payload.optionalSafetyInfo;
      const minVoltage: string = payload[0].payload.optionalMinVoltage;
      const maxVoltage: string = payload[0].payload.optionalMaxVoltage;
      const minCurrent: string = payload[0].payload.optionalMinCurrent;
      const maxCurrent: string = payload[0].payload.optionalMaxCurrent;

      return (
        <div>
          {isTreeParent ? (
            <div className={classes.treemapCustomTooltip}>
              <p>{`${name}: ${size} item(s)`}</p>
            </div>
          ) : (
            <div className={classes.treemapCustomTooltip}>
              <p>
                <b>{`${name}`}</b>
              </p>
              <p>{`${composition} battery from ${mfc}`}</p>
              <p>{`${minVoltage} - ${maxVoltage} V`}</p>
              <p>{`${minCurrent} - ${maxCurrent} mA`}</p>
              <p>{`${SafetyInfo}`}</p>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "200px" }}>
      <ResponsiveContainer height="90%" width="99%">
        <Treemap
          data={props.data}
          width={600}
          height={300}
          isAnimationActive={false}
          nameKey="name"
          dataKey="size"
          type="nest"
          nestIndexContent={(item) => {
            return <div>{`${item.name || "root"}`}</div>;
          }}
        >
          <Tooltip
            content={
              <CustomTooltip
                active={undefined}
                payload={undefined}
                label={undefined}
              />
            }
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
}
