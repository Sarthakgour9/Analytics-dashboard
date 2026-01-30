// src/pages/Dashboard.jsx

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">
        Welcome to Analytics Dashboard
      </h1>

      <p className="dashboard-description">
        Use the sidebar to explore detailed analytics, charts, tables,
        maps, and interactive components.
      </p>

      <div className="dashboard-grid">
        <StatCard title="Charts" value="Chart.js & Highcharts" />
        <StatCard title="Tables" value="AG Grid" />
        <StatCard title="Maps" value="OpenLayers" />
        <StatCard title="Interactive Components" value="React DnD & React Flow" />
        <StatCard title="Canvas" value="HTML Canvas" />
      </div>
    </div>
  );
}

const StatCard = ({ title, value }) => (
  <div
    style={{
      background: "var(--bg-secondary)",
      padding: "16px",
      borderRadius: "8px",
      border: "1px solid var(--border)",
      color: "var(--text-primary)",
    }}
  >
    <h3 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>{title}</h3>
    <p style={{ color: "var(--text-secondary)" }}>{value}</p>
  </div>
);

export default Dashboard;
