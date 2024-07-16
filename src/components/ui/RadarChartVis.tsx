import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

interface RadarChartProps {
  chartTitle: string;
  bucket: string;
  subsetName: string;
  subsetDataKey: string;
  supersetName: string;
  supersetDataKey: string;
  data: any;
}

export default function RadarChartVis(props: RadarChartProps) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={props.bucket} />
          <PolarRadiusAxis />
          <Radar
            name={props.supersetName}
            dataKey={props.supersetDataKey}
            stroke="#6884d8"
            fill="#6884d8"
            fillOpacity={0.6}
          />
          <Radar
            name={props.subsetName}
            dataKey={props.subsetDataKey}
            stroke="#47d132"
            fill="#47d132"
            fillOpacity={1}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
