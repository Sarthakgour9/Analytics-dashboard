import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import {
  months,
  monthlyRevenue,
  monthlyUsers,
} from "../data/mockData";

function HighchartsCharts() {
  const { theme } = useContext(ThemeContext);

  // Theme-aware colors
  const isDark = theme === 'dark';
  const textColor = isDark ? '#cbd5e1' : '#475569';
  const gridColor = isDark ? 'rgba(148,163,184,0.2)' : 'rgba(148,163,184,0.3)';
  const backgroundColor = isDark ? '#070b14' : '#ffffff';
  const accentColor = isDark ? '#22f5ff' : '#0ea5e9';

  const baseOptions = {
    chart: {
      backgroundColor: backgroundColor,
      style: {
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu'
      }
    },
    title: {
      style: { color: textColor }
    },
    xAxis: {
      categories: months,
      labels: { style: { color: textColor } },
      gridLineColor: gridColor,
      lineColor: gridColor,
      tickColor: gridColor
    },
    yAxis: {
      labels: { style: { color: textColor } },
      gridLineColor: gridColor,
      lineColor: gridColor,
      tickColor: gridColor,
      title: { style: { color: textColor } }
    },
    legend: {
      itemStyle: { color: textColor },
      itemHoverStyle: { color: accentColor }
    },
    tooltip: {
      backgroundColor: isDark ? 'rgba(16, 22, 44, 0.95)' : 'rgba(248, 250, 252, 0.95)',
      borderColor: isDark ? '#22f5ff' : '#0ea5e9',
      style: { color: textColor }
    }
  };

  const revenueOptions = {
    ...baseOptions,
    chart: { ...baseOptions.chart, type: "line", zoomType: "x" },
    title: { ...baseOptions.title, text: "Monthly Revenue" },
    yAxis: { ...baseOptions.yAxis, title: { text: "Revenue (₹)" } },
    series: [
      {
        name: "Revenue",
        data: monthlyRevenue,
        color: accentColor,
        lineWidth: 3,
        marker: { fillColor: accentColor }
      },
    ],
  };

  const usersOptions = {
    ...baseOptions,
    chart: { ...baseOptions.chart, type: "area" },
    title: { ...baseOptions.title, text: "User Growth" },
    yAxis: { ...baseOptions.yAxis, title: { text: "Users" } },
    series: [
      {
        name: "Users",
        data: monthlyUsers,
        color: accentColor,
        fillOpacity: isDark ? 0.3 : 0.2,
        marker: { fillColor: accentColor }
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={revenueOptions} />
      <div style={{ marginTop: "20px" }}>
        <HighchartsReact highcharts={Highcharts} options={usersOptions} />
      </div>
    </div>
  );
}

export default HighchartsCharts;
