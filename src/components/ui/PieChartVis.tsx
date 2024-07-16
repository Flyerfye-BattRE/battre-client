import React, { useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#D32F2F", "#7B1FA2", "#303F9F", "#F57C00", "#C2185B", "#00796B"];

interface PieChartProps {
  chartTitle: string;
  data: any;
  colorMap: any;
  orderedLegend: any;
}

export default function PieChartVis(props: PieChartProps) {
    // Filter legend data to only include entries present in the chart data
    const legendData = props.orderedLegend
    .filter(key => props.data.some(entry => entry.name === key.value))
    .map(key => ({
      value: key.value,
      color: props.colorMap[key.value]
    }));

  return (
    <div style={{ width: "100%", height: "50%",  minHeight: "200px"}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={props.data}
            cx="70%"
            cy="50%"
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
          >
            {props.data.map((entry, index) => (              
              <Cell
                key={`cell-${index}`}
                fill={props.colorMap[entry.name] || COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
           layout="centric"
        payload={legendData.map((item) => ({
          id: item.value,
          type: 'square', 
          value: item.value,
          color: item.color,
        }))}
      />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
