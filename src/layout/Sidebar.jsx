import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const linkStyle = ({ isActive }) => ({
    padding: "12px 16px",
    display: "block",
    textDecoration: "none",
    color: isActive ? "#fff" : "#cbd5e1",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    borderRadius: "6px",
    marginBottom: "6px",
  });

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <aside
      style={{
        width: window.innerWidth <= 768 ? (isOpen ? "240px" : "0") : "240px",
        background: "#0f172a",
        color: "#fff",
        padding: window.innerWidth <= 768 ? (isOpen ? "20px" : "0") : "20px",
        overflow: "hidden",
        transition: "width 0.3s ease, padding 0.3s ease",
        position: window.innerWidth <= 768 ? "fixed" : "static",
        height: "100vh",
        zIndex: 999,
      }}
    >
      {isOpen || window.innerWidth > 768 ? (
        <>
          <h2 style={{ marginBottom: "20px" }}>Analytics</h2>
          <nav>
            <NavLink to="/" style={linkStyle} onClick={handleLinkClick}>Dashboard</NavLink>
            <NavLink to="/chartjs" style={linkStyle} onClick={handleLinkClick}>Chart.js</NavLink>
            <NavLink to="/highcharts" style={linkStyle} onClick={handleLinkClick}>Highcharts</NavLink>
            <NavLink to="/ag-grid" style={linkStyle} onClick={handleLinkClick}>AG Grid</NavLink>
            <NavLink to="/ag-grid-live" style={linkStyle} onClick={handleLinkClick}>AG Grid Live</NavLink>
            <NavLink to="/drag-drop" style={linkStyle} onClick={handleLinkClick}>Drag & Drop</NavLink>
            <NavLink to="/maps" style={linkStyle} onClick={handleLinkClick}>Maps</NavLink>
            <NavLink to="/wysiwyg" style={linkStyle} onClick={handleLinkClick}>Wysiwyg</NavLink>
            <NavLink to="/canvas" style={linkStyle} onClick={handleLinkClick}>Canvas</NavLink>
          </nav>
        </>
      ) : null}
    </aside>
  );
};

export default Sidebar;
