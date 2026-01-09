// Time axis
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// Revenue
export const monthlyRevenue = [12000, 18000, 15000, 22000, 26000, 30000];

// Users
export const monthlyUsers = [200, 450, 700, 1100, 1600, 2200];

// Category sales
export const salesByCategory = {
  labels: ["Electronics", "Clothing", "Groceries", "Books"],
  data: [42000, 28000, 35000, 15000],
};

// Revenue split
export const revenueSplit = {
  labels: ["Mobile", "Laptop", "Accessories"],
  data: [55, 30, 15],
};


// ---------- HIGHSTOCK MOCK DATA ----------
// Format: [timestamp, value]

// helper to generate daily timestamps
const day = 24 * 60 * 60 * 1000;
const startDate = new Date("2024-01-01").getTime();

export const revenueTimeSeries = Array.from({ length: 180 }, (_, i) => [
  startDate + i * day,
  Math.round(20000 + Math.random() * 15000),
]);

export const usersTimeSeries = Array.from({ length: 180 }, (_, i) => [
  startDate + i * day,
  Math.round(500 + Math.random() * 1500),
]);


// ---------- AG GRID MOCK DATA ----------

export const usersTableData = [
  { id: 1, name: "Amit Sharma", role: "Admin", department: "IT", status: "Active", salary: 85000 },
  { id: 2, name: "Neha Verma", role: "Manager", department: "HR", status: "Active", salary: 72000 },
  { id: 3, name: "Rahul Singh", role: "Developer", department: "IT", status: "Inactive", salary: 65000 },
  { id: 4, name: "Priya Patel", role: "Designer", department: "UI/UX", status: "Active", salary: 60000 },
  { id: 5, name: "Karan Mehta", role: "Developer", department: "IT", status: "Active", salary: 70000 },
];


// ---------- LIVE FINANCE MOCK ----------

let priceHistory = [];

export const generateFinanceRow = (id) => {
  const price = Number((20000 + Math.random() * 10000).toFixed(2));
  const change = Number((Math.random() * 200 - 100).toFixed(2));

  priceHistory = [...priceHistory.slice(-9), price];

  return {
    id,
    time: new Date().toLocaleTimeString(),
    price,
    change,
    status: change >= 0 ? "UP" : "DOWN",
    trend: priceHistory, //  sparkline data
  };
};
