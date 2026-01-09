import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    padding: "12px 16px",
    display: "block",
    textDecoration: "none",
    color: isActive ? "#fff" : "#cbd5e1",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    borderRadius: "6px",
    marginBottom: "6px", // ✅ FIXED
  });

  return (
    <aside
      style={{
        width: "240px",
        background: "#0f172a",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Analytics</h2>

      <nav>
        <NavLink to="/" style={linkStyle}>Dashboard</NavLink>
        <NavLink to="/chartjs" style={linkStyle}>Chart.js</NavLink>
        <NavLink to="/highcharts" style={linkStyle}>Highcharts</NavLink>
        <NavLink to="/ag-grid" style={linkStyle}>AG Grid</NavLink>
        <NavLink to="/ag-grid-live" style={linkStyle}>AG Grid Live</NavLink>
        <NavLink to="/drag-drop" style={linkStyle}>Drag & Drop</NavLink>
        <NavLink to="/maps" style={linkStyle}>Maps</NavLink>
        <NavLink to="/wysiwyg" style={linkStyle}>Wysiwyg</NavLink>
        <NavLink to="/canvas" style={linkStyle}>Canvas</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
