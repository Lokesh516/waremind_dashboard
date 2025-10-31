import {
  Warehouse,
  ChevronDown,
  Filter,
  MoreVertical,
  Info,
} from "lucide-react";

export default function WarehouseLayout({ warehouse }) {
  const isCritical = (available, total) => available / total <= 0.4;

  const sections = [
    { name: "A", totalBins: 5, layout: "row" },
    { name: "B", totalBins: 10, layout: "grid" },
    { name: "C", totalBins: 10, layout: "grid" },
    { name: "D", totalBins: 10, layout: "grid" },
  ];

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Warehouse className="w-5 h-5 text-gray-500" />
          <h3 className="text-sm font-medium text-gray-500">
            Warehouse Layout Overview
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-200">
            Floor 1
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-200">
            <Filter className="w-4 h-4 text-gray-500" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-200">
            <MoreVertical className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {sections
        .filter((s) => s.name === "A")
        .map(({ name, totalBins }) => {
          const bins = warehouse[name];
          const isSectionCritical = isCritical(bins.length, totalBins);
          return (
            <div
              key={name}
              className={`border rounded-xl p-4 mb-6 flex flex-col ${isSectionCritical ? "bg-red-100" : "bg-gray-100"
                }`}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-1">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Section {name}
                  </h4>
                  <Info
                    className={`w-4 h-4 rounded-full p-[2px] cursor-pointer ${isSectionCritical
                        ? "bg-red-500 text-white"
                        : "bg-gray-700 text-white"
                      } hover:opacity-80`}
                  />
                </div>
                <h4
                  className={`text-sm font-semibold ${isSectionCritical ? "text-red-500" : "text-gray-500"
                    }`}
                >
                  Available Space:{" "}
                  <span className="text-black">
                    {bins.length}/{totalBins}
                  </span>
                </h4>
              </div>

              <div className="flex gap-2">
                {Array.from({ length: totalBins }).map((_, i) => {
                  const binName = `${name}${i + 1}`;
                  const isFilled = bins.includes(binName);
                  return (
                    <div
                      key={binName}
                      title={binName}
                      className={`w-25 h-10 flex items-center justify-center text-[10px] font-medium text-black rounded-md ${isFilled
                          ? "bg-gray-300"
                          : "bg-white text-gray-700"
                        } transition-all duration-200 hover:scale-105`}
                    >
                      {binName}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 flex-grow">
        {sections
          .filter((s) => s.layout === "grid")
          .map(({ name, totalBins }) => {
            const bins = warehouse[name];
            const isSectionCritical = isCritical(bins.length, totalBins);
            return (
              <div
                key={name}
                className={`border rounded-xl p-4 flex flex-col ${isSectionCritical ? "bg-red-100" : "bg-gray-100"
                  }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1">
                    <h4 className="text-sm font-semibold text-gray-700">
                      Section {name}
                    </h4>
                    <Info
                      className={`w-4 h-4 rounded-full p-[2px] cursor-pointer ${isSectionCritical
                          ? "bg-red-500 text-white"
                          : "bg-gray-700 text-white"
                        } hover:opacity-80`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {Array.from({ length: totalBins }).map((_, i) => {
                    const binName = `${name}${i + 1}`;
                    const isFilled = bins.includes(binName);
                    return (
                      <div
                        key={binName}
                        title={binName}
                        className={`w-10 h-10 flex items-center justify-center text-[10px] font-medium rounded-md ${isFilled
                            ? "bg-gray-300 text-black"
                            : "bg-white text-gray-700"
                          } transition-all duration-200 hover:scale-105`}
                      >
                        {binName}
                      </div>
                    );
                  })}
                </div>
                <p
                  className={`text-xs mt-3 ${isSectionCritical ? "text-red-500" : "text-gray-500"
                    }`}
                >
                  Available Space:{" "}
                  <span className="text-black font-semibold">
                    {bins.length}/{totalBins}
                  </span>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
