import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function MetricCard({ title, value, change, icon }) {
  const isPositive = change > 0;

  return (
    <div className="bg-white cursor-pointer rounded-2xl shadow-sm p-5 flex flex-col justify-between border border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-gray-400">{icon}</span>}
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex items-baseline gap-1">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <sup
            className={`text-xs font-medium ${isPositive ? "text-green-600" : "text-red-600"
              }`}
          >
            {isPositive ? `+${change}%` : `${change}%`}
          </sup>
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-full p-1">
          {isPositive ? (
            <ArrowUpRight size={16} className="text-green-500" />
          ) : (
            <ArrowDownRight size={16} className="text-red-500" />
          )}
        </div>
      </div>
    </div>
  );
}
