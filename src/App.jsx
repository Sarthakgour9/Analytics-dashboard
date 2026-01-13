import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import ChartJsPage from "./pages/ChartJsPage";
import HighchartsPage from "./pages/HighchartsPage";
import AgGridPage from "./pages/AgGridPage";
import DragDropPage from "./pages/DragDropPage";
import MapPage from "./pages/MapPage";
import AgGridLivePage from "./pages/AgGridLivePage";
import WysiwygPage from "./pages/WysiwygPage";
import CanvasPage from "./pages/CanvasPage";
import FlowPage from "./pages/FlowPage";


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="chartjs" element={<ChartJsPage />} />
            <Route path="highcharts" element={<HighchartsPage />} />
            <Route path="ag-grid" element={<AgGridPage />} />
            <Route path="drag-drop" element={<DragDropPage />} />
            <Route path="maps" element={<MapPage />} />
            <Route path="ag-grid-live" element={<AgGridLivePage />} />
            <Route path="wysiwyg" element={<WysiwygPage />} />
            <Route path = "canvas" element={<CanvasPage />} />
            <Route path="flow" element={<FlowPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
