import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Download, Home } from "lucide-react";

export default function StorageCapacity({ used }) {
  const data = [
    { name: "Used", value: used },
    { name: "Available", value: 100 - used },
  ];

  return (
    <div className="h-full flex flex-col justify-between bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <Home size={16} className="text-gray-400" />
        <span>Storage Capacity Used</span>
      </div>

      <div className="flex items-center justify-between w-full flex-grow my-4">
        {/* Chart */}
        <div className="w-[130px] h-[130px] min-w-0 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                <linearGradient id="storageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity={1} />
                  <stop offset="100%" stopColor="#fcd34d" stopOpacity={0.7} />
                </linearGradient>
              </defs>
              <Pie
                data={data}
                innerRadius={30}
                outerRadius={60}
                paddingAngle={3}
                dataKey="value"
                startAngle={180}
                endAngle={540}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? "url(#storageGradient)" : "#f1f5f9"}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col items-end justify-center text-right">
          <p className="text-2xl font-semibold text-gray-900">{used}%</p>
          <p className="text-xs text-gray-500">of occupied storage</p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-xs font-medium text-gray-700">
          Optimize Your Storage Capacity
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 flex items-center justify-center">
          <Download size={16} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
}
