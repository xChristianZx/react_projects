import React, { Component } from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryCandlestick,
  VictoryTheme,
  VictoryLine
} from "victory";

class CandleCharts extends Component {
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
    const lastCloseX0 = reformatSlice[28].x;
    const lastCloseX1 = reformatSlice[0].x;

    const dLine = reformatSlice.map(item => {
      return { x: item.x, y: lastCloseY };
    });

    console.log("reformatSlice: ", reformatSlice);
    console.log("lastCloseX0: ", lastCloseX0);
    console.log("lastCloseX1: ", lastCloseX1);
    // console.log("DLINE: ", dLine);

    return (
      <VictoryChart
        theme={VictoryTheme.material}
        padding={50}
        domainPadding={{ x: [25, 50], y: 50 }}
        scale={{ x: "time" }}
        height={800}
        width={1200}
      >
        <VictoryAxis
          fixLabelOverlap={true}
          style={{ tickLabels: { fontSize: 16, padding: 5 } }}          
        />
        <VictoryAxis
          orientation="right"
          offsetX={50}
          tickCount={8}
          style={{ tickLabels: { fontSize: 16, padding: 5 } }}
          dependentAxis
        />
        <VictoryLine
          data={dLine}
          style={{
            data: {
              stroke: "red",
              strokeOpacity: 0.2
            }
          }}
        />
        <VictoryCandlestick
          candleColors={{ positive: "green", negative: "#c43a31" }}
          data={reformatSlice}
        />
      </VictoryChart>
    );
  }
}

export default CandleCharts;