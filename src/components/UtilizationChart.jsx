// UtilizationChart.jsx
import ThermoGauge from "./ThermoGauge";
import { BarChart2 } from "lucide-react";


export default function UtilizationChart({ data }) {
  console.log(data)
  const shortDays = ["S", "M", "T", "W", "T", "F", "S"];
  const chartData = shortDays.map((label, i) => ({
    name: label,
    utilization: data[i] || 0,
  }));
  const peakValue = Math.max(...chartData.map((d) => d.utilization));

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl shadow-sm pt-2 border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <BarChart2 className="w-5 h-5 text-gray-500" />
        <h3 className="text-sm font-medium text-gray-500">Utilization & Efficiency</h3>
      </div>

      <div className="flex items-end pr-5">
        <div className="flex flex-col justify-between mb-4 text-xs text-gray-400 pr-2 h-[120px] translate-y-[-4px]">
          <span>100</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        <div className="grid grid-cols-7 gap-2 items-end">
          {chartData.map((entry, i) => (
            <ThermoGauge
              key={i}
              height={120}
              value={entry.utilization}
              label={entry.name}
              isPeak={entry.utilization === peakValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
