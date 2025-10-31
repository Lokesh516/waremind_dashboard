import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import StorageCapacity from "../components/StorageCapacity";
import WarehouseLayout from "../components/WarehouseLayout";
import UtilizationChart from "../components/UtilizationChart";
import AISuggestions from "../components/AISuggestions";
import { dashboardData } from "../data/dashboardData";

import {
  Package,
  ShoppingCart,
  Bot,
  Activity,
} from "lucide-react";

export default function Dashboard() {
  const { metrics, storageUsed, utilization, warehouse, suggestions } = dashboardData;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <main className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Inventory Accuracy"
            value={`${metrics.inventoryAccuracy.value}%`}
            change={metrics.inventoryAccuracy.change}
            icon={<Package size={20} className="text-gray-400" />}
          />
          <MetricCard
            title="Orders Fulfilled Today"
            value={metrics.ordersFulfilled.value}
            change={metrics.ordersFulfilled.change}
            icon={<ShoppingCart size={20} className="text-gray-400" />}
          />
          <MetricCard
            title="AI Tasks Generated"
            value={metrics.aiTasks.value}
            change={metrics.aiTasks.change}
            icon={<Bot size={20} className="text-gray-400" />}
          />
          <MetricCard
            title="Efficiency Score"
            value={`${metrics.efficiencyScore.value}/100`}
            change={metrics.efficiencyScore.change}
            icon={<Activity size={20} className="text-gray-400" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <StorageCapacity used={storageUsed} />
            <UtilizationChart data={utilization} />
          </div>

          <div className="lg:col-span-2">
            <WarehouseLayout warehouse={warehouse} />
          </div>

          <div className="lg:col-span-1">
            <AISuggestions suggestions={suggestions} />
          </div>
        </div>
      </main>
    </div>
  );
}
