// import { Chart } from "react-google-charts";
// const data = [
//   ["Day", "", "", "", ""],
//   ["Mon", 20, 28, 38, 45],
//   ["Tue", 31, 38, 55, 66],
//   ["Wed", 50, 55, 77, 80],
//   ["Thu", 77, 77, 66, 50],
//   ["Fri", 68, 66, 22, 15],
// ];

import { useEffect, useMemo, useState } from "react";
import getStock from "../api";
import { formatStockData } from "../utils";
import ReactApexChart from "react-apexcharts";
import { candleStickOptions } from "../constants";

//  const options = {
//   legend: "none",
//   bar: { groupWidth: "100%" }, // Remove space between bars.
//   candlestick: {
//     fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
//     risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
//   },
// };

// function Market() {
//   return (
//     <Chart
//       chartType="CandlestickChart"
//       width="100%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// }

// export default Market

function Market() {
  // S0MAQ8E9UC369SJS
  // S0MAQ8E9UC369SJS
  // WQ71B3HC200AE3RX

  const [martketTrend, setMartketTrend] = useState([]);

  useEffect(() => {
    getStock().then((res) => setMartketTrend(res));
  }, []);

  console.log(martketTrend);
  const seriesData = useMemo(
    () => formatStockData(martketTrend),
    [martketTrend]
  );

  return (
    <div>
      <div className="market">
        <ReactApexChart
          series={[
            {
              data: seriesData
            }
          ]}
          options={candleStickOptions}
          type="candlestick"
        />
      </div>
    </div>
  );
}

export default Market;
