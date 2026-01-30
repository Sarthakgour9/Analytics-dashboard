import "./ChartSetup";
import { Bar, Line, Doughnut, Radar } from "react-chartjs-2";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

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
const getCommonOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim(),
        font: { size: 12 },
        padding: 16,
      },
    },
  },
});

const getAxisOptions = () => ({
  ...getCommonOptions(),
  scales: {
    x: {
      ticks: { color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() },
      grid: { color: getComputedStyle(document.documentElement).getPropertyValue('--border').trim() },
    },
    y: {
      ticks: { color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() },
      grid: { color: getComputedStyle(document.documentElement).getPropertyValue('--border').trim() },
    },
  },
});

/* =========================
   MAIN COMPONENT
========================= */
function ChartJsCharts() {
  const { theme } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  const [chartOptions, setChartOptions] = useState({ common: {}, axis: {} });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Update chart options when theme changes
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim();
    const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border').trim();

    setChartOptions({
      common: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: textColor,
              font: { size: 12 },
              padding: 16,
            },
          },
        },
      },
      axis: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: textColor,
              font: { size: 12 },
              padding: 16,
            },
          },
        },
        scales: {
          x: {
            ticks: { color: textColor },
            grid: { color: borderColor },
          },
          y: {
            ticks: { color: textColor },
            grid: { color: borderColor },
          },
        },
      },
    });
  }, [theme]);

  const accentColor = theme === 'dark' ? '#22f5ff' : '#0ea5e9';
  const successColor = theme === 'dark' ? '#2cff9a' : '#10b981';

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
              options={chartOptions.axis}
              data={{
                labels: salesByCategory.labels,
                datasets: [
                  {
                    label: "Sales (₹)",
                    data: salesByCategory.data,
                    backgroundColor: accentColor,
                  },
                ],
              }}
            />
          </ChartBox>
        </Card>

        <Card title="Revenue Split">
          <ChartBox>
            <Doughnut
              options={chartOptions.common}
              data={{
                labels: revenueSplit.labels,
                datasets: [
                  {
                    data: revenueSplit.data,
                    backgroundColor: [accentColor, "#6366f1", "#f59e0b"],
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
              options={chartOptions.axis}
              data={{
                labels: monthlyUsers.labels,
                datasets: [
                  {
                    label: "Users",
                    data: monthlyUsers.data,
                    borderColor: successColor,
                    backgroundColor: theme === 'dark' ? 'rgba(44,255,154,0.25)' : 'rgba(16,185,129,0.15)',
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
                    labels: { color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim() },
                  },
                },
                scales: {
                  r: {
                    angleLines: {
                      color: getComputedStyle(document.documentElement).getPropertyValue('--border').trim(),
                    },
                    grid: {
                      color: getComputedStyle(document.documentElement).getPropertyValue('--border').trim(),
                    },
                    pointLabels: {
                      color: getComputedStyle(document.documentElement).getPropertyValue('--text-secondary').trim(),
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
                    backgroundColor: theme === 'dark' ? 'rgba(34,245,255,0.25)' : 'rgba(14,165,233,0.15)',
                    borderColor: accentColor,
                    pointBackgroundColor: accentColor,
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
