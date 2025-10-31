export const dashboardData = {
  metrics: {
    inventoryAccuracy: { value: 99.2, change: +12 },
    ordersFulfilled: { value: 342, change: -33 },
    aiTasks: { value: 57, change: +21 },
    efficiencyScore: { value: 87, change: -9 },
  },
  storageUsed: 84.2,
  utilization: [40, 65, 90, 80, 55, 70, 60],
  warehouse: {
    A: ["A1", "A2", "A3"],
    B: ["B1", "B2", "B5", "B6", "B8", "B9"],
    C: ["C2", "C4", "C6", "C9"],
    D: ["D1", "D2", "D3", "D5", "D6", "D8", "D9", "D10"],
  },
  suggestions: [
    {
      title: "Stock Depletion Predicted",
      insight: "Current rate of usage indicates this SKU will run out in 1.4 days.",
      action: "Increase reorder volume to 500 units to prevent fulfillment delays.",
      buttons: ["Reorder Now", "Remind Later"]
    },
    {
      title: "Unexpected Demand Spike for Item #F198",
      insight: "A sudden surge in orders has been detected for item #F198. Consider reviewing forecast models or adjusting inventory buffers."
    },
    {
      title: "Section C Congestion Detected During Peak Hours",
      insight: "Traffic density in Section C exceeds optimal thresholds between 2–4 PM. Consider rerouting or rescheduling tasks to reduce delays."
    },
    {
      title: "Bot Downtime Likely in Zone C",
      insight: "Maintenance logs and performance metrics suggest potential downtime risk for bots in Zone C. Schedule preventive checks."
    }
  ]
};
