import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {/* Hamburger menu for mobile */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            display: window.innerWidth <= 768 ? "block" : "none",
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: 1000,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
