import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import WareMindIcon from "../assets/WareMindIcon.ico";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const tabs = ["Dashboard", "Inventory", "Tasks", "Analytics", "AI Insights"];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100 transition-all duration-300 ${isOpen ? "pb-4" : "pb-0"
          }`}
      >
        <div className="px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 p-1 rounded-md">
                <img src={WareMindIcon} alt="WareMind Icon" className="w-6 h-6" />
              </div>
              <div className="font-bold text-xl tracking-tight text-gray-900">
                WareMind
              </div>
            </div>

            <div className="hidden md:flex bg-gray-100 rounded-full px-2 py-1 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium px-3 py-1.5 rounded-full transition-colors duration-200 ${activeTab === tab
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-900 hover:text-white"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-3 bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
                <img
                  src="/images/lokesh.jpg"
                  alt="Lokesh"
                  className="w-9 h-9 rounded-full border border-gray-300 object-cover"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-gray-800">Lokesh</span>
                  <span className="text-xs text-gray-500">Manager</span>
                </div>
                <ChevronDown size={16} className="text-gray-400 ml-1" />
              </div>

              <div className="flex sm:hidden items-center gap-2 bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
                <img
                  src="/images/lokesh.jpg"
                  alt="Lokesh"
                  className="w-8 h-8 rounded-full border border-gray-300 object-cover"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-gray-800">Lokesh</span>
                  <span className="text-[11px] text-gray-500 -mt-[2px]">Manager</span>
                </div>
                <ChevronDown size={14} className="text-gray-400" />
              </div>

              <button
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="mt-4 bg-gray-100 rounded-xl p-4 flex flex-col gap-2 md:hidden">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                  }}
                  className={`text-sm font-medium px-3 py-2 rounded-md text-left ${activeTab === tab
                      ? "bg-gray-900 text-white"
                      : "text-gray-700 hover:bg-gray-900 hover:text-white"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <div
        className={`transition-all duration-300 ${isOpen ? "h-[21rem]" : "h-16"
          }`}
      />
    </>
  );
}
