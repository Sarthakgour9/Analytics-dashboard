// src/pages/Dashboard.jsx

function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
        Welcome to Analytics Dashboard
      </h1>

      <p style={{ color: "#475569", marginBottom: "20px" }}>
        Use the sidebar to explore detailed analytics, charts, tables,
        maps, and interactive components.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        <StatCard title="Charts" value="Chart.js & Highcharts" />
        <StatCard title="Tables" value="AG Grid" />
        <StatCard title="Maps" value="OpenLayers" />
        <StatCard title = "Interactive Components" value="React DnD & React Flow" />
        <StatCard title="Canvas" value="HTML Canvas" />
      </div>
    </div>
  );
}

const StatCard = ({ title, value }) => (
  <div
    style={{
      background: "#fff",
      padding: "16px",
      borderRadius: "8px",
    }}
  >
    <h3>{title}</h3>
    <p style={{ color: "#64748b" }}>{value}</p>
  </div>
);

export default Dashboard;
