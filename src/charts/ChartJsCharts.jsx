import "./ChartSetup";
import { Bar, Line, Doughnut, Radar } from "react-chartjs-2";
import { useState, useEffect } from "react";

/* =========================
   MOCK DATA
========================= */
const salesByCategory = {
  labels: ["Electronics", "Clothing", "Groceries", "Books"],
  data: [42000, 28000, 35000, 15000],
};

const monthlyUsers = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  data: [200, 450, 700, 1100, 1600, 2200],
};

const revenueSplit = {
  labels: ["Mobile", "Laptop", "Accessories"],
  data: [55, 30, 15],
};

const skillRadar = {
  labels: ["React", "Node", "DB", "System Design", "DevOps"],
  data: [80, 70, 65, 60, 50],
};

/* =========================
   SHARED CHART OPTIONS
========================= */
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: "#e5e7eb",
        font: { size: 12 },
        padding: 16,
      },
    },
  },
};

const axisOptions = {
  ...commonOptions,
  scales: {
    x: {
      ticks: { color: "#cbd5e1" },
      grid: { color: "rgba(148,163,184,0.15)" },
    },
    y: {
      ticks: { color: "#cbd5e1" },
      grid: { color: "rgba(148,163,184,0.15)" },
    },
  },
};

/* =========================
   MAIN COMPONENT
========================= */
function ChartJsCharts() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="charts-wrapper">
      {/* ROW 1 */}
      <div
        className="charts-grid"
        style={{
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
        }}
      >
        <Card title="Sales by Category">
          <ChartBox>
            <Bar
              options={axisOptions}
              data={{
                labels: salesByCategory.labels,
                datasets: [
                  {
                    label: "Sales (₹)",
                    data: salesByCategory.data,
                    backgroundColor: "#22f5ff",
                  },
                ],
              }}
            />
          </ChartBox>
        </Card>

        <Card title="Revenue Split">
          <ChartBox>
            <Doughnut
              options={commonOptions}
              data={{
                labels: revenueSplit.labels,
                datasets: [
                  {
                    data: revenueSplit.data,
                    backgroundColor: ["#22f5ff", "#6366f1", "#f59e0b"],
                    borderWidth: 0,
                  },
                ],
              }}
            />
          </ChartBox>
        </Card>
      </div>

      {/* ROW 2 */}
      <div className="charts-row">
        <Card title="Monthly User Growth">
          <ChartBox>
            <Line
              options={axisOptions}
              data={{
                labels: monthlyUsers.labels,
                datasets: [
                  {
                    label: "Users",
                    data: monthlyUsers.data,
                    borderColor: "#2cff9a",
                    backgroundColor: "rgba(44,255,154,0.25)",
                    tension: 0.4,
                    fill: true,
                  },
                ],
              }}
            />
          </ChartBox>
        </Card>
      </div>

      {/* ROW 3 */}
      <div className="charts-row">
        <Card title="Skill Radar">
          <ChartBox className="skill-radar">
            <Radar
              options={{
                plugins: {
                  legend: {
                    labels: { color: "#e5e7eb" },
                  },
                },
                scales: {
                  r: {
                    angleLines: {
                      color: "rgba(148,163,184,0.2)",
                    },
                    grid: {
                      color: "rgba(148,163,184,0.2)",
                    },
                    pointLabels: {
                      color: "#e5e7eb",
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
              data={{
                labels: skillRadar.labels,
                datasets: [
                  {
                    label: "Skill Level",
                    data: skillRadar.data,
                    backgroundColor: "rgba(34,245,255,0.25)",
                    borderColor: "#22f5ff",
                    pointBackgroundColor: "#22f5ff",
                  },
                ],
              }}
            />
          </ChartBox>
        </Card>
      </div>
    </div>
  );
}

/* =========================
   UI CARD
========================= */
const Card = ({ title, children }) => (
  <div className="ui-card">
    <h3 className="card-title">{title}</h3>
    {children}
  </div>
);

/* =========================
   CHART BOX
========================= */
const ChartBox = ({ children, className }) => (
  <div className={`chart-box ${className || ''}`}>
    {children}
  </div>
);

export default ChartJsCharts;
