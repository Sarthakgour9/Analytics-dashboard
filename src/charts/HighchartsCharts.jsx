import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import {
  months,
  monthlyRevenue,
  monthlyUsers,
} from "../data/mockdata";

function HighchartsCharts() {
  const revenueOptions = {
    chart: { type: "line", zoomType: "x" },
    title: { text: "Monthly Revenue" },
    xAxis: { categories: months },
    yAxis: { title: { text: "Revenue (₹)" } },
    series: [
      {
        name: "Revenue",
        data: monthlyRevenue,
      },
    ],
  };

  const usersOptions = {
    chart: { type: "area" },
    title: { text: "User Growth" },
    xAxis: { categories: months },
    yAxis: { title: { text: "Users" } },
    series: [
      {
        name: "Users",
        data: monthlyUsers,
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
