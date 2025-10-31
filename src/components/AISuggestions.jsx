import { useState } from "react";
import {
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Clock,
  ShoppingBag,
  Move,
  Bot,
} from "lucide-react";

export default function AISuggestions({ suggestions }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const getIconForTitle = (title) => {
    const iconProps = { size: 16, className: "text-gray-500" };

    if (title.includes("Stock Depletion")) return <Clock {...iconProps} />;
    if (title.includes("Demand Spike")) return <ShoppingBag {...iconProps} />;
    if (title.includes("Congestion")) return <Clock {...iconProps} />;
    if (title.includes("Bot Downtime")) return <Bot {...iconProps} />;
    return <Lightbulb {...iconProps} />;
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb size={18} className="text-orange-500" />
        <h3 className="text-sm font-bold text-gray-900">
          AI Suggestions ({suggestions.length})
        </h3>
      </div>

      <div className="flex-1 space-y-3 overflow-auto">
        {suggestions.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-800"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {getIconForTitle(item.title)}
                  </div>
                  <span>{item.title}</span>
                </div>

                <div className="w-5 h-5 flex items-center justify-center">
                  {isExpanded ? (
                    <ChevronUp size={16} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-500" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 text-xs text-gray-600">
                  {item.insight && (
                    <div className="mb-2">
                      <p className="text-[11px] font-bold text-gray-800 mb-1">
                        Insight
                      </p>
                      <p className="text-xs text-gray-700">{item.insight}</p>
                    </div>
                  )}

                  {item.action && (
                    <div className="mb-3">
                      <p className="text-[11px] font-bold text-gray-800 mb-1">
                        Suggested Action
                      </p>
                      <p className="text-xs text-gray-700">{item.action}</p>
                    </div>
                  )}

                  {item.buttons && Array.isArray(item.buttons) && (
                    <div className="flex gap-2">
                      {item.buttons.map((btnLabel, i) => (
                        <button
                          key={i}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${i === 0
                              ? "bg-black text-white hover:bg-gray-800"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                          {btnLabel}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-6 text-center">
        <button className="text-xs font-medium text-gray-500 hover:text-gray-700 transition">
          View All Insights →
        </button>
      </div>
    </div>
  );
}
