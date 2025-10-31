#  WareMind Dashboard

A modern, responsive **warehouse management dashboard** built using **React, Vite, Tailwind CSS, D3.js, and Recharts**.  
This project focuses on **frontend development, UI design, and data visualization** using real-time-like mock data.

---

##  Live Demo
 **[View Deployment on Netlify](https://wareminddashboard.netlify.app/)**

---

##  Overview

**WareMind Dashboard** provides an insightful overview of warehouse operations — including utilization efficiency, storage capacity, and AI-driven recommendations — all in a sleek, data-rich interface.  
It demonstrates component-based UI design, reusable React architecture, and modern chart visualizations.

---

##  Features

- **Recharts (Pie Visualization)** – Displays used vs available warehouse storage capacity.  
- **D3.js (Bar Visualization)** – Custom-built thermometer-style utilization chart showing weekly trends.  
- **Warehouse Layout Overview** – Visual representation of warehouse sections (A–D) with occupancy indicators.  
- **Real-time Utilization Metrics** – Dynamic color indicators for critical sections.  
- **AI Suggestions Panel** – Expandable insights with suggested actions and quick CTA buttons.  
- **Fully Responsive UI** – Optimized for desktop, tablet, and mobile.  
- **Tailwind CSS Styling** – Clean, consistent, and modern design system.  
- **Modular React Components** – Built for readability and scalability.

---

##  Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | **React (Vite)** |
| Styling | **Tailwind CSS** |
| Charting Libraries | **D3.js** (Bar Visualization), **Recharts** (Pie Visualization) |
| Icons | **Lucide React** |
| Build Tool | **Vite** |

---

##  Folder Structure

- **public/** – Contains static assets used in the dashboard.  
- **src/components/** – Reusable UI components such as `Header`, `MetricCard`, `StorageCapacity`, `WarehouseLayout`, `UtilizationChart`, `ThermoGauge`, and `AISuggestions`.  
- **src/data/** – Includes mock dataset (`dashboardData.js`) used for populating charts and cards.  
- **src/pages/** – Contains the main page layout like `Dashboard.jsx`.  

---

##  Component Overview

| Component | Description |
|------------|--------------|
| **Header** | Responsive top navigation bar with logo, tabs, and user profile. |
| **MetricCard** | Displays KPI metrics like accuracy, orders, AI tasks, and efficiency. |
| **StorageCapacity (Recharts)** | Pie chart showing warehouse storage breakdown. |
| **UtilizationChart (D3.js)** | Custom D3 bar/thermometer visualization for weekly utilization. |
| **WarehouseLayout** | Displays multiple warehouse sections with dynamic bin data. |
| **AISuggestions** | Expandable AI insights with actions and buttons. |

---

##  Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lokesh516/waremind_dashboard
   cd waremind-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser at**
   ```
   http://localhost:5173
   ```

---

##  Author

**Lokesh Goddumarri**  
Frontend Developer — React.js  
 [lokeshyadav31290@gmail.com](mailto:lokeshyadav31290@gmail.com)
