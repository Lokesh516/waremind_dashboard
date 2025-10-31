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

      <div className="flex flex-row items-center justify-between w-full flex-grow my-4 gap-4">
        <div
          className="flex items-center justify-center w-full sm:w-auto sm:-mr-4"
          style={{
            transform:
              used > 80 ? "translateX(-8px)" : used < 20 ? "translateX(8px)" : "none",
          }}
        >
          <div
            className="aspect-square w-[110px] sm:w-[130px] flex items-center justify-center"
            style={{ outline: "none" }}
          >
            <ResponsiveContainer
              width="100%"
              height="100%"
              className="[&>svg]:outline-none [&>svg]:focus:outline-none"
            >
              <PieChart>
                <defs>
                  <linearGradient id="storageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity={1} />
                    <stop offset="100%" stopColor="#fcd34d" stopOpacity={0.7} />
                  </linearGradient>
                </defs>
                <Pie
                  data={data}
                  innerRadius="45%"
                  outerRadius="85%"
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
        </div>

        <div className="flex flex-col items-center sm:items-end justify-center text-center sm:text-right">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">{used}%</p>
          <p className="text-xs text-gray-500">of occupied storage</p>
        </div>
      </div>

      <div className="flex flex-row gap-2">
        <button className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-xs font-medium text-gray-700 hover:bg-gray-200 transition">
          Optimize Your Storage Capacity
        </button>
        <button className="bg-gray-100 border border-gray-300 rounded-lg p-2 flex items-center justify-center hover:bg-gray-200 transition">
          <Download size={16} className="text-gray-600" />
        </button>
      </div>

      <style>
        {`
          .recharts-responsive-container svg:focus,
          .recharts-responsive-container svg:focus-visible {
            outline: none !important;
            box-shadow: none !important;
          }
        `}
      </style>
    </div>
  );
}
