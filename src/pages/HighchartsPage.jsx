import HighchartsCharts from "../charts/HighchartsCharts";
import HighStockCharts from "../charts/HightstockCharts";

function HighchartsPage() {
    return (
        <div>
            <h1 style = {{fontSize:"28px", marginBottom:"20px"}}>Highcharts Analytics</h1>
            <HighchartsCharts />
            <HighStockCharts />
        </div>
    )
};
 export default HighchartsPage;