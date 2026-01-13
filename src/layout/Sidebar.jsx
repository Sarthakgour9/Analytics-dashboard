import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useWindowSize from "../hooks/useWindowSize";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  const linkStyle = ({ isActive }) => ({
    padding: "12px 16px",
    display: "block",
    textDecoration: "none",
    color: isActive ? "var(--text-primary)" : "var(--sidebar-text)",
    backgroundColor: isActive ? "var(--sidebar-active)" : "transparent",
    borderRadius: "6px",
    marginBottom: "6px",
  });

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        />
      )}
      <aside
        style={{
          width: isMobile ? (isOpen ? "240px" : "0") : "240px",
          background: "var(--sidebar-bg)",
          color: "var(--text-primary)",
          padding: isMobile ? (isOpen ? "20px" : "0") : "20px",
          overflow: "hidden",
          transition: "width 0.3s ease, padding 0.3s ease",
          position: isMobile ? "fixed" : "static",
          height: "100vh",
          zIndex: 999,
        }}
      >
        {(isOpen || !isMobile) && (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ margin: 0 }}>Analytics</h2>
              <button
                onClick={toggleTheme}
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </div>
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
              <NavLink to="/flow" style={linkStyle} onClick={handleLinkClick}>React Flow</NavLink>
            </nav>
          </>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
