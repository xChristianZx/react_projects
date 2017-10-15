import React, { Component } from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryCandlestick,
  VictoryTheme,
  VictoryLine
} from "victory";

class PieChart extends Component {
  /*
          RESPONSE FORMAT
    [time,low, high, open, close, volume]
    */

  render() {
    /*Converts Epoch unix time to local time and then creates an OHLC object for VCharts*/
    if (!this.props.data.length > 0) {
      return null;
    }

    const reformatData = this.props.data.map(item => {
      const timeConvert = new Date(item[0] * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric"
      });
      return {
        x: timeConvert,
        open: item[3],
        close: item[4],
        high: item[2],
        low: item[1]
      };
    });

    const reformatSlice = reformatData.slice(0, 29);
    const lastCloseY = reformatSlice[0].close;

    const dLine = reformatSlice.map(item => {
      return { x: item.x, y: lastCloseY}
    })

    const lastCloseX0 = reformatSlice[28].x;
    const lastCloseX1 = reformatSlice[0].x;

    console.log("reformatSlice: ", reformatSlice);
    console.log("lastCloseX0: ", lastCloseX0);
    console.log("lastCloseX1: ", lastCloseX1);
    console.log("DLINE: ", dLine);

    return (
      <VictoryChart
        theme={VictoryTheme.material}
        padding={50}
        domainPadding={{ x: [25, 50], y: 50 }}
        scale={{ x: "time" }}
        height={800}
        width={1200}
      >
        <VictoryAxis fixLabelOverlap={true} />
        <VictoryAxis orientation="right" offsetX={50} dependentAxis />
        <VictoryLine
          data={dLine}
          style={{
            data: {
              stroke: 'red', strokeOpacity: .20
            }
          }}
        /> 
        <VictoryCandlestick
          candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={reformatSlice}
        />
      </VictoryChart>
    );
  }
}

export default PieChart;

// [
//   { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
//   { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
//   { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
//   { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
//   { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 }
// ]
