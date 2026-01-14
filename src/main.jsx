import "./agGridSetup"
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className="app-shell">
        <App />
      </div>
      <div className="data-layer" id="data-layer-root" />
    </ThemeProvider>
  </React.StrictMode>
);
