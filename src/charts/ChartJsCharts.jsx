import "./ChartSetup";
import { Bar, Line, Doughnut, Radar } from "react-chartjs-2";

// mock data

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

//chart component

function ChartJsCharts() {
  return (
    <div>
      {/* ROW 1 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        <Card title="Sales by Category">
          <Bar
            data={{
              labels: salesByCategory.labels,
              datasets: [
                {
                  label: "Sales (₹)",
                  data: salesByCategory.data,
                  backgroundColor: "#2563eb",
                },
              ],
            }}
          />
        </Card>

        <Card title="Revenue Split">
          <Doughnut
            data={{
              labels: revenueSplit.labels,
              datasets: [
                {
                  data: revenueSplit.data,
                  backgroundColor: ["#0ea5e9", "#6366f1", "#f59e0b"],
                },
              ],
            }}
          />
        </Card>
      </div>

      {/* ROW 2 */}
      <div style={{ marginTop: "20px" }}>
        <Card title="Monthly User Growth">
          <Line
            data={{
              labels: monthlyUsers.labels,
              datasets: [
                {
                  label: "Users",
                  data: monthlyUsers.data,
                  borderColor: "#16a34a",
                  backgroundColor: "rgba(22,163,74,0.2)",
                  tension: 0.4,
                },
              ],
            }}
          />
        </Card>
      </div>

      {/* ROW 3 */}
      <div style={{ marginTop: "20px" }}>
        <Card title="Skill Radar">
          <Radar
            data={{
              labels: skillRadar.labels,
              datasets: [
                {
                  label: "Skill Level",
                  data: skillRadar.data,
                  backgroundColor: "rgba(37,99,235,0.2)",
                  borderColor: "#2563eb",
                },
              ],
            }}
          />
        </Card>
      </div>
    </div>
  );
}

// Ui card component

const Card = ({ title, children }) => (
  <div
    style={{
      background: "#fff",
      padding: "16px",
      borderRadius: "8px",
    }}
  >
    <h3 style={{ marginBottom: "10px" }}>{title}</h3>
    {children}
  </div>
);

export default ChartJsCharts;
