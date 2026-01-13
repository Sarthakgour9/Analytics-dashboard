import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import useWindowSize from "../hooks/useWindowSize";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "var(--bg-primary)" }}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main style={{ 
        flex: 1, 
        padding: "20px", 
        overflowY: "auto",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)"
      }}>
        {/* Hamburger menu for mobile */}
        {isMobile && (
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              position: "fixed",
              top: "10px",
              left: "10px",
              zIndex: 1000,
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              padding: "10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
