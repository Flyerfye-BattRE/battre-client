import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

interface BarChartProps {
  chartTitle: string;
  xAxisTitleKey: string;
  xAxisLabelKey: string;
  bottomBarKey: string;
  topBarKey: string;
  data: any;
}

export default function BarChartVis(props: BarChartProps) {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "200px" }}>
      <ResponsiveContainer>
        <BarChart
          width={600}
          height={300}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: -10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.xAxisLabelKey}>
            <Label value={props.xAxisTitleKey} dy={15} />
          </XAxis>
          <YAxis />
          <Tooltip />
          <Bar dataKey={props.bottomBarKey} stackId="a" fill="#249c09" />
          <Bar dataKey={props.topBarKey} stackId="a" fill="#52d5de" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
