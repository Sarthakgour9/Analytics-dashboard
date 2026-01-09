import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import{
    revenueTimeSeries,
    usersTimeSeries,
}   from "../data/mockData";

// Highstock Options

const revenueStockOptions = {
    rangeSelector: {
        selected: 1,
    },
    title: { text: "Revenue Over Time" },

    yAxis: {title: { text: "Revenue (₹)" } },
    series: [
        {
            name: "Revenue",
            data: revenueTimeSeries,
            tooltip: {  valuePrefix: "₹" }
        },
    ],
};

const usersStockOptions = {
    rangeSelector: {
        selected: 2,
    },
    title: { text: "User Growth Over Time" },

    yAxis: { title: {text:"Users"}},
    series:[
        {
            name: "Users",
            data: usersTimeSeries,
            tooltip: { valueSuffix: " users" },
        }
    ],
};

function HighStockCharts() {
    return (
        <div>
            <card>
                <HighchartsReact
                    highcharts={Highcharts} 
                    constructorType={"stockChart"}
                    options={revenueStockOptions}
                    />
            </card>
            <card>
                <HighchartsReact
                    highcharts={Highcharts} 
                    constructorType={"stockChart"}
                    options={usersStockOptions}
                    />
            </card>
        </div>
    )
};

const card = ({children}) =>(
    <div style={{
        background:"#000000ff",
        padding:"16px",
        borderRadius:"8px",
        marginBottom:"20px",
    }}>    
    </div>
);
export default HighStockCharts;
